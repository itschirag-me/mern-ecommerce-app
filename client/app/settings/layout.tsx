import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="bg-gray-100 h-screen">{children}</div>;
};

export default Layout;
