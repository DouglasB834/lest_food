"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { Button } from "./Button";
import { RiMenuSearchFill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import { dataOptionMenu } from "@/utils/dataMenu";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="w-full   h-[80px] flex gap-4 justify-between items-center  bg-primaryColorBg text-black  container ">
      <a href="/">
        <Image src={logo} alt="Logo" />
      </a>

      {openMenu && (
        <nav className="absolute z-10 md:hidden right-0  top-14  w-[140px] bg-primary flex flex-col items-center rounded-l-[1rem]">
          <ul className="flex flex-col  w-[100%]  text-black text-[.95rem] font-bold  items-center ">
            {dataOptionMenu.map((items, i) => (
              <li
                key={i}
                className="flex items-center justify-center w-full h-[39px] hover:bg-amber-400"
              >
                <a
                  className="hover:text-white transition-all"
                  href={`#${items.id}`}
                  onClick={handleMenu}
                >
                  {items.title}
                </a>
              </li>
            ))}
          </ul>
          <button className="w-[100%] h-[39px] font-bold   md:bg-primary  hover:bg-amber-300 transition ">
            Sing in
          </button>
        </nav>
      )}

      <nav className="hidden md:flex w-full">
        <ul className="flex w-[100%] gap-6 items-center justify-center text-gray-500  text-[.95rem] font-bold">
          {dataOptionMenu.map((items, i) => (
            <li key={i}>
              <a className="hover:text-black" href={`#${items.id}`}>
                {items.title}
              </a>
            </li>
          ))}
        </ul>
        <Button text="Sing in" />
      </nav>

      <button
        aria-label="button menu"
        className="md:hidden text-[2.1rem] text-amber-600 hover:text-slate-500"
        onClick={handleMenu}
      >
        {openMenu ? <MdRestaurantMenu /> : <RiMenuSearchFill />}
      </button>
    </header>
  );
};
