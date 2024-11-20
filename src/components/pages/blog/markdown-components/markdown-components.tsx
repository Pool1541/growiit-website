/* eslint-disable jsx-a11y/alt-text */

import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import React, { isValidElement, ReactNode } from 'react';
import styles from './markdown-componets.module.css';

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''} className={styles.anchor}>
        {children}
      </Link>
    );
  },
  img: (props) => (
    <Image
      className={styles.image}
      width={928}
      height={522}
      {...(props as ImageProps)}
    />
  ),
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    return (
      <Code className={styles.code} theme={'dracula-soft'} {...props}>
        {children as ReactNode}
      </Code>
    );
  },
  hr: (props) => <hr className={styles.hr} {...props} />,
  ul: (props) => <ul className={styles.list} {...props} />,
  h1: (props) => <h1 className={styles.text} {...props} />,
  h2: (props) => <h2 className={styles.text} {...props} />,
  h3: (props) => <h3 className={styles.text} {...props} />,
  h4: (props) => <h4 className={styles.text} {...props} />,
  h5: (props) => <h5 className={styles.text} {...props} />,
  h6: (props) => <h6 className={styles.text} {...props} />,
  p: ({ children, ...props }) => {
    const childArray = React.Children.toArray(children);
    const isImageParagraph = childArray.every(
      (child) =>
        isValidElement(child) &&
        (typeof child.type === 'function' && child.type.name === 'img')
    );

    if (isImageParagraph) {
      return <>{children}</>;
    }

    return (
      <p className={styles.text} {...props}>
        {children}
      </p>
    );
  },
};
