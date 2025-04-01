import type { MDXComponents } from "mdx/types";
import BlogImage from "@/components/BlogImage";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    BlogImage,
  };
}
