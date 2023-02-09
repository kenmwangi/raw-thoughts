import React from "react";
import Header from "./Header";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
