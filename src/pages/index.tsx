import React from "react";
import Link from "next/link";
import Head from "next/head";

// components
import Header from "@/components/Header";
import IntroSection from "@/components/IntroSection";
const HomePage = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <Head>
        <title>RW - Collection of my raw thoughts</title>
      </Head>

      <IntroSection title="An archive of my raw thoughts 💭️">
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          My ocassional thought processes. <br /> <br />I will be writing on
          different topics from my software development journey, social issues
          and philosophy 📑️. But since it will be on internet - public - 🫣️
          everyone is free to read it.
        </p>
      </IntroSection>
    </main>
  );
};

export default HomePage;
