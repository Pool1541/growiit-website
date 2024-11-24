import { Metadata } from 'next';
import Script from 'next/script';
import { generateBlogPostingJsonLd, generateFaqJsonLd } from '@/lib';
import getPosts, { getPost } from '@/lib/get-posts';

type Params = Promise<{ slug: string }>;

export const generateMetadata = async (props: { params: Params }): Promise<Metadata> => {
  const params = await props.params;
  const slug = await params.slug;
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) return {}
  
  const ogImage = post.images.find((image) => image.type === 'og') || post?.images[0];

  return {
    title: `${post.title} | Growiit`,
    description: post.description,
    alternates: {
      canonical: `https://growiit.com/blog/${params.slug}`,
    },
    twitter: {
      title: post?.title,
      description: post?.description,
      card: "summary_large_image",
      images: {
        url: ogImage.src,
        alt: ogImage.alt,
        type: "image/webp",
        width: 1200,
        height: 630,
      }
    },
    openGraph: {
      type: "article",
      title: post?.title,
      description: post?.description,
      url: `https://growiit.com/blog/${params.slug}`,
      images: {
        url: ogImage.src,
        alt: ogImage.alt,
        type: "image/webp",
        width: 1200,
        height: 630,
      }
    }
  };
};

export default async function Layout(
  props: Readonly<{
    children: React.ReactNode;
    params: Params;
  }>
) {
  const params = await props.params;
  const slug = await params.slug;

  const post = await getPost(slug);
  const faqJsonLd = post?.faq ? generateFaqJsonLd(post.faq) : undefined;
  const blogPostingJsonLd = post ? generateBlogPostingJsonLd(post) : undefined;

  return (
    <>
      {faqJsonLd && (
        <Script
          id='faq-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      )}
      {blogPostingJsonLd && (
        <Script
          id='blog-posting-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPostingJsonLd),
          }}
        />
      )}
      {props.children}
    </>
  );
}
