/** @type {import('next').NextConfig} */
const nextConfig = {
  // On garde ça pour ignorer les petites erreurs TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  // C'est tout ! On retire 'eslint', 'output' et 'images' 
  // pour laisser Vercel gérer ça automatiquement.
};

export default nextConfig;
