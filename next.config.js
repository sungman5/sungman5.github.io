/** @type {import('next').NextConfig} */
const nextConfig = {  
  images: {
    loader: 'imgix',
    path: 'https://images.unsplash.com', // 이미지 도메인    
  },
  reactStrictMode: true,
}

module.exports = nextConfig