import React from "react";
import { HeroText } from "./HeroText";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
  return (
    <section className="bg-white tween">
      <HeroText />
      <HeroImage />
    </section>
  );
};
