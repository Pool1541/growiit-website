export function generateFaqJsonLd(faq: { question: string; answer: string }[]) {
  if (!faq || faq.length < 1) return;

  const mainEntity = faq.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
}

export function generateBlogPostingJsonLd(post: BlogArticleInterface) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://growiit.com/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString().split('T')[0],
    dateModified: new Date(post.lastModified!).toISOString().split('T')[0],
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Growiit',
      logo: {
        '@type': 'ImageObject',
        url: 'https://growiit.com/icon.svg',
      },
    },
    image: post.image.src,
    articleBody: post.description,
    keywords: post.tags.map((tag) => tag.tag),
    articleSection: post.tags[0].tag,
  };
}