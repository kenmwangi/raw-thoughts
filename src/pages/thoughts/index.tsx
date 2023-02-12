import React from "react";
import Link from "next/link";
import Head from "next/head";
import { compareDesc, format, parseISO } from "date-fns";
import { allThoughts, Thought } from "contentlayer/generated";

// components

import IntroSection from "@/components/IntroSection";
import Mark from "@/utils/Mark";

export async function getStaticProps() {
  const thoughts: Thought[] = allThoughts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { thoughts } };
}

const HomePage = ({ thoughts }: { thoughts: Thought[] }) => {
  return (
    <main className="">
      <Head>
        <title>Raw Thoughts - Collection of my raw thoughts</title>
      </Head>

      <section className="max-w-6xl mx-auto py-2 px-8">
        <h3 className="max-w-2xl mt-3 text-3xl mb-10 font-bold leading-relaxed tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Thoughts
        </h3>
        {thoughts.map((thought, idx) => (
          <ThoughtCard key={idx} {...thought} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;

function ThoughtCard(thought: Thought) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl">
        <Link
          href={thought.slug}
          className="text-indigo-500 hover:text-indigo-700 transition-colors"
        >
          {thought.title}
        </Link>
      </h2>
      <time
        dateTime={thought.date}
        className="block text-xs text-gray-800 mb-2"
      >
        {format(parseISO(thought.date), "LLLL d, yyyy")}
      </time>

      <p>
        <strong className="mr-2">Summary:</strong>
        {thought.summary}
      </p>
      {/* <article
        className="text-sm tracking-wide leading-normal"
        dangerouslySetInnerHTML={{ __html: thought.body.html }}
      /> */}
    </section>
  );
}
