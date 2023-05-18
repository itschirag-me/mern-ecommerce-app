/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/users",
        destination: "http://localhost:8010", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
