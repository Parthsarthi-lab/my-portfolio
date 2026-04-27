import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({});

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repositoryName.endsWith(".github.io");
const basePath =
  isGithubActions && repositoryName && !isUserOrOrgSite
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default withMDX(nextConfig);
