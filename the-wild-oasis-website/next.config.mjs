/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vqnkhlidkqdthzpiqijd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;

// https://supabase.com/dashboard/project/vqnkhlidkqdthzpiqijd/storage/buckets/cabin-image
