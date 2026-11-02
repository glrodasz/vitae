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
};

module.exports = nextConfig;
