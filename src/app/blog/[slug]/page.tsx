import { Hero } from "@/components/pages/blog";
import { notFound } from "next/navigation";
import styles from './article.module.css'
import { adjustColorBrightness, GenerateCssColorVariable } from "@/lib";
import { Header } from "@/components/layout";
import { HeaderVariables } from "@/types";
import { Article } from "@/components/pages/blog/article";
import getPosts, { getPost } from "@/lib/get-posts";
import { PostBody } from "@/components/pages/blog/post-body/post-body";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const articles = await getPosts();
  return articles.map(article => ({ slug: article.slug }));
}

export default async function Page(props: { params: Params}) {
  const params = await props.params;
  const slug = await params.slug;
  const article = await getPost(slug);

  if (!article) return notFound();
  const withBgColor = { "--custom-article-bg-color": article.color }
  const withDarkColor = GenerateCssColorVariable('--custom-article-dark-color', article.color);
  const style = {...withBgColor, ...withDarkColor}

  const headerVariables: HeaderVariables = {
    '--text-color': '#000000',
    '--custom-color': adjustColorBrightness(article.color, -50),
    '--header-height': '10rem',
  };

  return (
    <>
      <Header variables={headerVariables} />
      <main className={styles.article} style={style}>
        <Hero {...article} className={styles['pb-15']} noAnchors />
        <Article>
          <PostBody>{ article.body }</PostBody>
        </Article>
      </main>
    </>
  )
}