/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    //unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
