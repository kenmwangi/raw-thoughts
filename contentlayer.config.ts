import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";

import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Thought = defineDocumentType(() => ({
  name: "Thought",
  filePathPattern: `**/*.mdx`,

  fields: {
    title: {
      type: "string",
      description: "The title of the post",
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
    summary: {
      type: "string",
      required: true,
    },
    // image: {
    //   type: "string",
    //   required: true,
    // },
  },
  computedFields,
}));

const computedFields: ComputedFields = {
  readingTime: {
    type: "json",
    resolve: (doc) => readingTime(doc.body.raw),
  },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },

  slug: {
    type: "string",
    resolve: (doc) => `/thoughts/${doc._raw.flattenedPath}`,
  },
};

export default makeSource({
  contentDirPath: "thoughts",
  documentTypes: [Thought],

  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: "one-dark-pro",
      //     onVisitLine(node) {
      //       // Prevent lines from collapsing in `display: grid` mode, and allow empty
      //       // lines to be copy/pasted
      //       if (node.children.length === 0) {
      //         node.children = [{ type: "text", value: " " }];
      //       }
      //     },
      //     onVisitHighlightedLine(node) {
      //       node.properties.className.push("line--highlighted");
      //     },
      //     onVisitHighlightedWord(node) {
      //       node.properties.className = ["word--highlighted"];
      //     },
      //   },
      // ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
