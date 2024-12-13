/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          pathname: '/shadcn.png', // Specify exact path or use `/` for all paths
        },
      ],
    },
  };
export default nextConfig;
