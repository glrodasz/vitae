const path = require("path");

/** Parses and validates content/*.yml so pages import them like JSON. */
const yamlLoader = path.join(__dirname, "scripts", "yaml-loader.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // The flattened print view was replaced by the CV document.
        source: "/print",
        destination: "/resume",
        permanent: true,
      },
    ];
  },
  // `yarn dev` (Turbopack)
  turbopack: {
    rules: {
      "*.yml": { loaders: [yamlLoader], as: "*.js" },
    },
  },
  // `yarn build` (webpack)
  webpack(config) {
    config.module.rules.push({ test: /\.ya?ml$/, use: [yamlLoader] });
    return config;
  },
};

module.exports = nextConfig;
