import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import type { Blog } from "contentlayer/generated";
import Head from "next/head";
import React from "react";
import Balancer from "react-wrap-balancer";

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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    notFound();
  }
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
      <article className="prose max-w-3xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1>
            <Balancer>{blog.title}</Balancer>
          </h1>
          <time dateTime={blog.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </time>
        </div>
      </article>
      <div
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
        className="max-w-prose mx-auto lg:text-lg"
      />
    </React.Fragment>
  );
};

export default SingleBlogPage;
