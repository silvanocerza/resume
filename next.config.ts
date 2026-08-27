import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    rules: {
      "*.toml": {
        loaders: [path.resolve(__dirname, "toml-loader.cjs")],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
