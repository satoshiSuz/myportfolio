/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       confing.node = { fs: 'empty' };
//     }

//     return config;
//   },
// };
