/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["github.com"],
  },
  // Add the following lines for export configuration
  target: "experimental-serverless-trace",
  exportPathMap: async function () {
    return {
      "/": { page: "/" }, // You can add other pages as needed
      // Example: "/projects/1": { page: "/projects/[projectId]", query: { projectId: 1 } },
    };
  },
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["github.com"],
//   },
// };
