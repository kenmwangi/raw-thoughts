import { Link } from "../utils/NextLink";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 flex justify-between items-center container max-w-6xl mx-auto">
      <Link href="/" className="font-bold text-indigo-600">
        Raw Thoughts
      </Link>

      <nav className="flex gap-3">
        <Link
          href="/"
          className="text-blue-400 text-xs p-2 bg-blue-50 hover:bg-blue-100 rounded-md inline-flex items-center"
          activeClassName="underline"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-blue-400 text-xs p-2 bg-blue-50 hover:bg-blue-100 rounded-md inline-flex items-center"
          activeClassName="underline"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
