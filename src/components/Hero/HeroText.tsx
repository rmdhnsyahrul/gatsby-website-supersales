import React, { useRef } from "react";
import { Button } from "../Button";
import PlayIcon from "svgs/play.svg";
import StarTop from "svgs/star.svg";
import StarBottom from "svgs/star-1.svg";
import StarRight from "svgs/star-2.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const HeroText = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const boxes: any = gsap.utils.toArray(".star");
      boxes.forEach((box: any, index: number) => {
        gsap.from(box, {
          rotate: index % 2 ? 360 : -360,
          repeat: -1,
          scale: 0,
          ease: "bounce.out",
          duration: 1,
        });
      });
    },
    { scope: container }
  );
  return (
    <div
      className="relative py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12"
      ref={container}
    >
      <h1 className="mb-4 text-4xl font-bold">
        Field sales software for humans
      </h1>
      <p className="mb-8 px-12 lg:px-8 text-lg font-normal text-gray-500 lg:text-xl">
        Supersales enables your team to perform at the highest level, yet stay
        human. With a sleek design and an easy-to-navigate app.
      </p>
      <div className="flex flex-col space-y-1 item-center justify-center sm:flex-row">
        <Button size="large">Book a demo</Button>
        <Button variant="secondary" size="large" icon={<PlayIcon width={24} />}>
          See how it works
        </Button>
      </div>
      <div className="star absolute top-2 left-0">
        <StarTop />
      </div>
      <div className="star absolute bottom-10 right-10">
        <StarBottom />
      </div>
      <div className="star absolute bottom-20 right-0">
        <StarRight />
      </div>
    </div>
  );
};
