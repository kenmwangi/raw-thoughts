import React from "react";
import Link from "next/link";
import Head from "next/head";

// components
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
import Mark from "@/utils/Mark";

const HomePage = () => {
  return (
    <main className="">
      <Head>
        <title>RW - Collection of my raw thoughts</title>
      </Head>

      <IntroSection title="An archive of my raw thoughts 💭️">
        <article className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
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
    </main>
  );
};

export default HomePage;
