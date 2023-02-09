import React from "react";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="relative">
      <Container className="">
        <div className="my-10 text-sm text-center text-gray-600">
          Copyright &copy; Raw Thoughts, {new Date().getFullYear()}. Made with
          ❤️ by{" "}
          <Link
            href="/about"
            className="text-indigo-500 hover:text-indigo-700 transition-colors hover:underline"
          >
            Ken Mwangi
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
