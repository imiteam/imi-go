"use client";

import bgDesktop from "../../../public/assets/signDesktopLayout.png";
import bgDesktopMini from "../../../public/assets/signDesktopMiniLayout.png";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

export default function LayoutImage() {
  const { width } = useWindowSize();
  const [layoutImage, setLayoutImage] = useState<StaticImageData | undefined>();

  // Because we don't know the width while we are rendering page, this dirty solution
  // would allow us to load correct image on 1280+ resolutions.
  useEffect(() => {
    if (width) {
      setLayoutImage(width >= 1280 ? bgDesktop : bgDesktopMini);
    }
  }, [width]);

  if (!layoutImage) {
    return null;
  }
  return (
    <Image
      alt="background"
      src={layoutImage}
      className="overflow-hidden md:hidden lg:h-full lg:w-auto lg:object-contain lg:object-bottom lg:pl-[64px] lg:pt-12 xl:w-full xl:object-cover xl:object-left-top"
    />
  );
}
