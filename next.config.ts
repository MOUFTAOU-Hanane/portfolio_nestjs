import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // 🔧 Désactive les erreurs strictes React (utile en prod rapide)
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore les erreurs ESLint lors du déploiement
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore les erreurs TypeScript lors du déploiement
  },
  // Autres options possibles si besoin :
  images: {
    domains: ['localhost', 'your-image-host.com'], // si tu utilises <Image src="...">
  },
};

export default nextConfig;
