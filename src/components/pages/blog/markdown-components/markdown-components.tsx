/* eslint-disable jsx-a11y/alt-text */

import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXComponents } from 'mdx/types'
import { Code } from 'bright'

import { ReactNode } from 'react'

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    )
  },
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    return (
      <Code theme={'dracula-soft'} {...props}>
        {children as ReactNode}
      </Code>
    )
  },
  h1: (props) => <h1 className={`text-4xl`} {...props} />,
  h2: (props) => <h2 className={`text-3xl`} {...props} />,
  h3: (props) => <h3 className={`text-2xl`} {...props} />,
  h4: (props) => <h4 className={`text-xl`} {...props} />,
  h5: (props) => <h5 className={`text-lg`} {...props} />,
  h6: (props) => <h6 className={`text-base`} {...props} />,
  p: (props) => <p className={`text-base`} style={{ marginBottom: '10px'}} {...props} />,
}