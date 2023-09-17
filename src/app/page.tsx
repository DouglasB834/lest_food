"use client";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import Rectangle from "../../public/assets/Rectangle 13.png";
import Image from "next/image";
import { WeServe } from "@/components/WeServe";
import { OurMenu } from "@/components/OurMenu";
import { FeedBack } from "@/components/FeedBack";

import { BannerFooter } from "@/components/BannerFooter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="relative">
        <Banner />
        <Image
          src={Rectangle}
          alt="tangle"
          className="absolute bottom-[7rem] z-[-1] "
        />
        <Image
          src={Rectangle}
          alt="tangle"
          className="absolute bottom-[4rem] z-[-1] "
        />
      </div>

      <main
        id="howItWorks"
        className="py-[5rem] bg-white flex flex-col gap-[2rem] "
      >
        <WeServe />
        <OurMenu />
        <FeedBack />
        <BannerFooter />
      </main>
      {/* <Email /> */}
      <Footer />
    </div>
  );
}
