interface BlogArticleInterface {
  title: string;
  description: string;
  image: BlogArticleImageInterface;
  slug: string;
  author: string;
  date: string;
  tags: BlogArticleTagInterface[];
  color: string;
}

interface BlogArticleTagInterface {
  tag: string;
  slug: string;
}

interface BlogArticleImageInterface {
  src: string;
  alt: string;
}