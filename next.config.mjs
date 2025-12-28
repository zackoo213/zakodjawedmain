/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pour GitHub Pages
  output: 'export',
  
  // Désactive l'optimisation d'image (obligatoire pour GitHub Pages)
  images: { 
    unoptimized: true 
  },

  // LA PARTIE IMPORTANTE : Ignore les erreurs strictes
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
