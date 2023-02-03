import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus/.";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    // publishedAt: { type: "string", required: true },
    // description: { type: "string", required: true },
    // cover: { type: "string", required: true },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    slug: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blogs",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis,
    ],
  },
});
