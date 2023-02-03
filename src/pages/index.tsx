import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <section>
      <Link
        href="/blog"
        className="text-indigo-500 hover:text-indigo-700 transition-colors"
      >
        Blog
      </Link>
      <h1>Home</h1>
    </section>
  );
};

export default HomePage;
