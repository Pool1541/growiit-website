/* eslint-disable jsx-a11y/alt-text */

import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import { ReactNode } from 'react';

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
      sizes='100vw'
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
  ul: (props) => <ul className={styles.list} {...props} />,
  h1: (props) => <h1 className={styles.text} {...props} />,
  h2: (props) => <h2 className={styles.text} {...props} />,
  h3: (props) => <h3 className={styles.text} {...props} />,
  h4: (props) => <h4 className={styles.text} {...props} />,
  h5: (props) => <h5 className={styles.text} {...props} />,
  h6: (props) => <h6 className={styles.text} {...props} />,
  p: (props) => <p className={styles.text} {...props} />,
};
