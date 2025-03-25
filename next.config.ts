/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // async rewrites() {
  //   if (!isProd) return []; // Skip in dev

  //   return [
  //     {
  //       source: "/",
  //       has: [
  //         {
  //           type: "host",
  //           value: "work.fogiato.com",
  //         },
  //       ],
  //       destination: "/work",
  //     },
  //   ];
  // },
  // async redirects() {
  //   if (!isProd) return []; // Skip in dev

  //   return [
  //     {
  //       source: "/work",
  //       destination: "https://work.fogiato.com",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;