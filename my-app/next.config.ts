import { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // 使用靜態導出
  assetPrefix: '/Uaena/',
  basePath: '/Uaena',
  trailingSlash: true,

  
  // output: 'export', // 使用靜態導出
  // assetPrefix: isProd ? '/Uaena/' : '',
  // basePath: isProd ? '/Uaena' : '',
  // trailingSlash: true,

  // webpack(config) {
  //   config.output.publicPath = isProd ? '/Uaena/' : '';
  //   return config;
  // },
};

export default nextConfig;
