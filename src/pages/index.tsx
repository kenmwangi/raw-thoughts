import React from "react";
import Link from "next/link";
import Head from "next/head";
import { compareDesc, format, parseISO } from "date-fns";
import { allThoughts, Thought } from "contentlayer/generated";

// components
import IntroSection from "@/components/IntroSection";
import Container from "@/components/Container";
import Mark from "@/utils/Mark";

const MAX_DISPLAY = 3;

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

      <Container className="max-w-6xl mx-auto py-2 px-8 xl:px-0">
        <h3 className="max-w-2xl mt-3 text-3xl mb-10 font-bold leading-relaxed tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Featured Thoughts
        </h3>
        {!thoughts.length && (
          <p className="text-indigo-700">
            ⚠️ Oops, No thoughts Found. I am dry
          </p>
        )}
        {thoughts.slice(0, MAX_DISPLAY).map((thought, idx) => (
          <ThoughtCard key={idx} {...thought} />
        ))}

        {thoughts.length > MAX_DISPLAY && (
          <section className="flex my-10 justify-start text-base font-medium leading-6">
            <Link
              href="/thoughts"
              aria-label="all thoughts"
              className="text-indigo-500 hover:text-indigo-700 hover:underline-offset-8 hover:underline"
            >
              All Thoughts &rarr;
            </Link>
          </section>
        )}
      </Container>
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
    </section>
  );
}
