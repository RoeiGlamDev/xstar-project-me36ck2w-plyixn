const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image domain
    formats: ['image/avif', 'image/webp']
},
  webpack(config) {
    // Custom webpack configuration for luxury 3D designs and effects
    
    return config;
  },
  experimental: {
    optimizeCss: true
}
};

export default nextConfig;