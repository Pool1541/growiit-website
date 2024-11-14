import { notFound } from 'next/navigation';
import { Header } from '@/components/layout';
import { Article, Hero, PostBody, RecommendedArticles } from '@/components/pages/blog';
import { adjustColorBrightness, GenerateCssColorVariable} from '@/lib';
import getPosts, { getPost } from '@/lib/get-posts';
import type { HeaderVariables } from '@/types';
import styles from './article.module.css';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const articles = await getPosts();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const slug = await params.slug;
  const article = await getPost(slug);

  if (!article) return notFound();
  
  const withBgColor = { '--custom-article-bg-color': article.color };
  const withDarkColor = GenerateCssColorVariable('--custom-article-dark-color', article.color);
  const style = { ...withBgColor, ...withDarkColor };

  const headerVariables: HeaderVariables = {
    '--text-color': '#000000',
    '--custom-color': adjustColorBrightness(article.color, -50),
    '--header-height': '10rem',
  };

  return (
    <>
      <Header variables={headerVariables} />
      <main className={styles.article} style={style}>
        <Hero {...article} className={styles['pb-15']} />
        <Article>
          <PostBody>{article.body}</PostBody>
        </Article>
        <RecommendedArticles />
      </main>
    </>
  );
}
