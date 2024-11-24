/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com'
      },
      {
        protocol: 'https',
        hostname: 'bubble.io'
      }
      ,
      {
        protocol: 'https',
        hostname: 'i.postimg.cc'
      },
      {
        protocol: 'https',
        hostname: 'd1ssfwckvhk5up.cloudfront.net'
      }
    ]
  }
};

export default nextConfig;
