interface BlogArticleInterface {
  title: string;
  description: string;
  images: BlogArticleImageInterface[];
  slug: string;
  author: string;
  date: string;
  tags: BlogArticleTagInterface[];
  color: string;
  published: boolean;
  body: string;
  lastModified?: number;
  slug?: string;
  faq?: FaqArticleInteface[];
}

interface BlogArticleTagInterface {
  tag: string;
  slug: string;
}

interface BlogArticleImageInterface {
  src: string;
  alt: string;
  type: "thumbnail" | "small" | "large" | "og";
}

interface FaqArticleInteface {
  question: string;
  answer: string;
}

declare module '@fec/remark-a11y-emoji';