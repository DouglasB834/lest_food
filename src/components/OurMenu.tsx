import React from "react";
import { SubTitle } from "./SubTitle";
import { DataDishMenu } from "@/utils/dataDishMenu";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from "./Button";

export const OurMenu = () => {
  return (
    <section id="menu" className="container  ">
      <SubTitle
        title="Our Menu"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
        subtitle="Our Popular Menu"
      />
      <ul className=" overflow-x-auto  flex sm:flex-wrap sm:justify-around items-center gap-4 ">
        {DataDishMenu.map((item, i) => (
          <li
            key={i}
            className="flex flex-col justify-between min-w-[175px] w-[280px] h-[360px] shadow-lg rounded-[1rem] bg-colorCardbg my-4 "
          >
            <figure className="flex justify-center items-center bg-colorCardbg p-4 rounded-t-[1rem] h-[230px]">
              <Image src={item.img} alt={item.title} title={item.title} />
            </figure>
            <div className="bg-white clippy rounded-[1rem] ">
              <div className="text-center font-bold ">
                <p>{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="flex justify-between items-center p-4">
                <p className="font-bold">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </p>
                <button
                  aria-label="click to favorite"
                  className="text-[1.5rem] text-gray-600"
                >
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-center mt-10 mb-8  ">
        <Button aria-label="Se more menu" text="More menu" />
      </div>
    </section>
  );
};
