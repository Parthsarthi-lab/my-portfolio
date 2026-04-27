import type { ComponentType } from "react";

export const blogComponentLoaders: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  // Add future posts here:
  // "my-first-post": () => import("./my-first-post.mdx"),
};
