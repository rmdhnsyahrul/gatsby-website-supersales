import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const HeroImage = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box: any) => {
        gsap.from(box, {
          y: 1000,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".tween",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: container }
  );
  return (
    <div
      className="relative p-6 lg:px-16 overflow-hidden tween"
      ref={container}
    >
      <div className="flex items-center justify-center">
        <StaticImage
          src="../../assets/images/jpegs/pos-image-w-bg.png"
          alt="mockup"
          className="z-0 max-w-screen-xl"
        />
      </div>
      <div className="box absolute top-[10%] right-6 lg:right-32 xl:right-60">
        <div className="rounded-full max-w-screen-sm max-h-screen-sm z-1">
          <StaticImage
            src="../../assets/images/jpegs/Border.png"
            alt="mockup"
            className="z-0 border-black border-2 border-inside rounded-full w-16 md:w-32"
          />
        </div>
        <div className="box absolute bottom-0 h-[auto] w-[100%] rounded-full bg-green-400 text-white text-center p-1 text-sm lg:text-base whitespace-nowrap font-semibold lg:font-bold">
          Client
        </div>
      </div>
      <div className="box absolute bottom-40 left-6 lg:left-32 xl:left-64">
        <div className="rounded-full max-w-screen-sm max-h-screen-sm z-1">
          <StaticImage
            src="../../assets/images/jpegs/Border-1.png"
            alt="mockup"
            className="z-0 border-black border-2 border-inside rounded-full w-16 md:w-32"
          />
        </div>
        <div className="box absolute bottom-0 h-[auto] w-[100%] rounded-full bg-blue-400 text-white text-center p-1 text-sm lg:text-base whitespace-nowrap font-semibold lg:font-bold">
          Sales
        </div>
      </div>
      <div className="box absolute top-[70%] right-12 lg:right-36 xl:right-64">
        <div className="rounded-full max-w-screen-sm max-h-screen-sm z-1">
          <StaticImage
            src="../../assets/images/jpegs/Border-2.png"
            alt="mockup"
            className="z-0 border-black border-2 border-inside rounded-full w-16 md:w-32"
          />
        </div>
        <div className="box absolute bottom-0 h-[auto] w-[100%] rounded-full bg-orange-400 text-white text-center p-1 text-sm lg:text-base whitespace-nowrap font-semibold lg:font-bold">
          Sales Manager
        </div>
      </div>
    </div>
  );
};
