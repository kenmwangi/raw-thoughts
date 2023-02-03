import { allBlogs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import type { Blog } from "contentlayer/generated";
import Head from "next/head";
import React from "react";

type BlogProps = {
  blog: Blog;
};

export async function getStaticPaths() {
  const paths: string[] = allBlogs.map((blog) => blog.slug);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return {
    props: {
      blog,
    },
  };
}

const SingleBlogPage = ({ blog }: BlogProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <time dateTime={blog.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </time>
          <h1>{blog.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
      </article>
    </React.Fragment>
  );
};

export default SingleBlogPage;
