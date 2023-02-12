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
        <title>RW - Collection of my raw thoughts</title>
      </Head>

      <IntroSection title="An archive of my raw thoughts 💭️">
        <article className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          <p>My ocassional thought processes.</p>
          <p>
            I will be writing on different topics from my software development
            journey, social issues and philosophy 📑️.
          </p>
          <p>
            But since it will be on internet - <Mark>public</Mark>- 🫣️ everyone
            is free to read it.
          </p>
        </article>
      </IntroSection>

      <section className="max-w-6xl mx-auto py-2 px-8 lg:px-0">
        <h3 className="max-w-2xl mt-3 text-3xl mb-10 font-bold leading-relaxed tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Featured Thoughts
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

      <p className="leading-normal text-gray-500 lg:text-lg">
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
