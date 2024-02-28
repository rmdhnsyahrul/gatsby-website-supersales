import React from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
