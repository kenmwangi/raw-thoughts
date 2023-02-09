import React from "react";
interface ContainerProps {
  className: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <section
      className={`container p-8 mx-auto xl:px-0 ${className ? className : ""}`}
    >
      {children}
    </section>
  );
};

export default Container;
