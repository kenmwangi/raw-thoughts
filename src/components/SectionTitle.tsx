import React from "react";
import Container from "./Container";

interface SectionTitleProps {
  title: string;
  children: React.ReactNode;
}

const SectionTitle = ({ title, children }: SectionTitleProps) => {
  return (
    <Container className="">
      {title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          {title}
        </h2>
      )}

      {children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {children}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
