import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Slider = () => {
  return (
    <div className="py-12 xl:px-16 mx-auto text-center">
      <h2 className="text-slate-300 pb-8">Trusted by leading companies</h2>
      <div className="flex overflow-hidden space-x-4 xl:items-center xl:justify-center">
        <div className="flex space-x-8 animate-infinite-scroll xl:animate-none">
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-51.png"
              className="w-[208px]"
              alt="client logo - circle"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-52.png"
              className="w-[208px]"
              alt="client logo - fox hub"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-53.png"
              className="w-[208px]"
              alt="client logo - treva"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-54.png"
              className="w-[208px]"
              alt="client logo - muzica"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-55.png"
              className="w-[208px]"
              alt="client logo - goldline"
            />
          </div>
        </div>
        <div
          className="xl:hidden flex space-x-8 animate-infinite-scroll xl:animate-none"
          aria-hidden="true"
        >
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-51.png"
              className="w-[208px]"
              alt="client logo - circle"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-52.png"
              className="w-[208px]"
              alt="client logo - fox hub"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-53.png"
              className="w-[208px]"
              alt="client logo - treva"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-54.png"
              className="w-[208px]"
              alt="client logo - muzica"
            />
          </div>
          <div className="relative w-[208px] h-auto">
            <StaticImage
              loading="lazy"
              src="../assets/images/jpegs/Frame-55.png"
              className="w-[208px]"
              alt="client logo - goldline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
