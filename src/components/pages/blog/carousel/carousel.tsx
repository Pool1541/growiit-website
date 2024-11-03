/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import './embla.css'
import Slide from './slide';
import styles from './slide.module.css'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type BlogArticleWidthDarkColorInterface = BlogArticleInterface & {
  'dark-color': string;
};

type PropType = {
  slides: BlogArticleWidthDarkColorInterface[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const applyStylesToSlides = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    let height = 0;
    const centerSlideIndex = emblaApi.selectedScrollSnap();
    const slideNodes = emblaApi.slideNodes();
  
    slideNodes.forEach((slideNode, index) => {
      if (index === centerSlideIndex) {
        const contentNode = slideNode.querySelector(`.${styles.content}`) as HTMLElement;
        height = contentNode.scrollHeight;
        slideNode.classList.remove(styles['out-of-view']);
        const customColor = slides[index].color;
        const darkColor = slides[index]['dark-color'];
        document.querySelector('body')!.style.setProperty('--custom-article-bg-color', customColor)
        document.querySelector('body')!.style.setProperty('--custom-article-dark-color', darkColor)
        document.querySelector('header')!.style.setProperty('--custom-color', darkColor)
      } else {
        slideNode.classList.add(styles['out-of-view']);
      }
      (slideNode.style as CSSStyleDeclaration).setProperty('--content-height', `${height}px`);
    });
  }, [emblaApi]);
  

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    applyStylesToSlides(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
      .on('select', applyStylesToSlides)
      .on('init', applyStylesToSlides);
  }, [emblaApi, tweenOpacity]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((article, index) => (
            <Slide {...article} key={index} />
          ))}
        </div>
        <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__controls">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='embla__button embla__button--prev embla__button--small' />
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='embla__button embla__button--next embla__button--small'/>
      </div>
    </div>
  )
}

export default EmblaCarousel
