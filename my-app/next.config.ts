import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // 將 Next.js 設置為靜態導出
  basePath: '/Uaena',     // 設定 GitHub Pages 的子目錄
  assetPrefix: '/Uaena/', // 設定靜態資源的前綴路徑
  trailingSlash: true,   // 保證路徑以斜線結尾
};

export default nextConfig;
