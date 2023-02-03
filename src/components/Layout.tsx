import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container max-w-6xl mx-auto px-4 md:px-0 lg:px-0">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
