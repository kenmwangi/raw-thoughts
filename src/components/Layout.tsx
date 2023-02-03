import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container max-w-5xl mx-auto flex flex-col min-h-screen px-4  lg:px-0">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
