import React from "react";
import Container from "./Container";

interface IntroSectionProps {
  title: string;
  children: React.ReactNode;
}
const IntroSection = ({ title, children }: IntroSectionProps) => {
  return (
    <Container className="flex flex-wrap mb-4 p-8 lg:gap-10 lg:flex-nowrap">
      <div>
        <section className="flex flex-col w-full mt-4">
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-relaxed tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
            {title}
          </h3>
          {children}
        </section>
      </div>
    </Container>
  );
};

export default IntroSection;
