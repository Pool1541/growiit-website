interface BlogArticleInterface {
  title: string;
  description: string;
  image: string;
  slug: string;
  author: string;
  date: string;
  tags: TagInterface[];
}

interface TagInterface {
  tag: string;
  slug: string;
}