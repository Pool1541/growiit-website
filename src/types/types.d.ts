interface BlogArticleInterface {
  title: string;
  description: string;
  image: BlogArticleImageInterface;
  slug: string;
  author: string;
  date: string;
  tags: BlogArticleTagInterface[];
  color: string;
  published: boolean;
  body: string;
  views?: number;
  lastModified?: number
}

interface BlogArticleTagInterface {
  tag: string;
  slug: string;
}

interface BlogArticleImageInterface {
  src: string;
  alt: string;
}

declare module '@fec/remark-a11y-emoji';