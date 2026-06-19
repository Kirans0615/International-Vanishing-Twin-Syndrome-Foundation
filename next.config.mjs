/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/International-Vanishing-Twin-Syndrome-Foundation',
  assetPrefix: '/International-Vanishing-Twin-Syndrome-Foundation/',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
