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
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative pt-[80px]">
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
        <OurMenu />
        <WeServe />
        <FeedBack />
        <BannerFooter />
      </main>
      <Contact />
      <Footer />
    </main>
  );
}
