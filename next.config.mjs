/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vtfanxidlqtcddmvkkpp.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/minibox/**",
      },
    ],
  },
};

export default nextConfig;
