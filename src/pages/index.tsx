import React from "react";
import Link from "next/link";
import Head from "next/head";

// components
import Header from "@/components/Header";
const HomePage = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <Head>
        <title>RW - Collection of my raw thoughts</title>
      </Head>

      <Header />
      <section className="container">
        <p>
          These are my ocassional thought processes based on day to day
          experiences. I will be writing on different topics from my software
          development journey, social issues and philosophy.
        </p>
        <p>
          I intend to make this personal space an archive of my raw thoughts.
        </p>
        <p>
          But since it will be on internet - public - 🫣️ everyone is free to
          read it.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
