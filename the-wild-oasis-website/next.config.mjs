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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // add this for Google
      },
      {
        protocol: "https",
        hostname: "authjs.dev",
        port: "",
        pathname: "/img/providers/google.svg",
      },
    ],
  },
};

export default nextConfig;

// https://supabase.com/dashboard/project/vqnkhlidkqdthzpiqijd/storage/buckets/cabin-image
