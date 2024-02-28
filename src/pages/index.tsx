import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Hero, Layout, Slider } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Slider />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
