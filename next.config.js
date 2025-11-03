/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/i,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = nextConfig;
