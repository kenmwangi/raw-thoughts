import { allThoughts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";

import type { Thought } from "contentlayer/generated";

import Head from "next/head";
import Link from "next/link";
import React from "react";
import Container from "../../components/Container";
import Balancer from "react-wrap-balancer";

type ThoughtProps = {
  thought: Thought;
};

export async function getStaticPaths() {
  const paths: string[] = allThoughts.map((thought) => thought.slug);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const thought = allThoughts.find(
    (thought) => thought._raw.flattenedPath === params.slug
  );

  if (!thought) {
    notFound();
  }

  return {
    props: {
      thought,
    },
  };
}

const SingleBlogPage = ({ thought }: ThoughtProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>{thought.title}</title>
      </Head>
      <article className="prose max-w-3xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1>
            <Balancer>{thought.title}</Balancer>
          </h1>
          <time dateTime={thought.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(thought.date), "LLLL d, yyyy")}
          </time>
        </div>
      </article>
      <div
        dangerouslySetInnerHTML={{ __html: thought.body.html }}
        className="max-w-prose mx-auto lg:text-lg px-4 lg:px-0"
      />
      <Container className="flex my-10 justify-end text-base font-medium leading-6">
        <Link
          href="/thoughts"
          aria-label="all thoughts"
          className="text-indigo-500 hover:text-indigo-700 hover:underline-offset-8 hover:underline"
        >
          &larr; Back to All Thoughts
        </Link>
      </Container>
    </React.Fragment>
  );
};

export default SingleBlogPage;
