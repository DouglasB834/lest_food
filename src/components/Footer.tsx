import { dataFooter } from "@/utils/dataFooter";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="container ">
      <div className="flex justify-between items-center flex-wrap gap-4 p-4 mb-4 border-b-4 ">
        {dataFooter.map((item, i) => (
          <div key={i} className="">
            {item.description?.map((item, i) => (
              <div key={i} className="w-[100%] md:w-[250px]  ">
                <div className="">
                  <div>
                    <Image alt="logo Lest's food" src={item.logo} />
                  </div>
                  <p className="text-sm w-[30ch]">{item.text}</p>
                  {item.links?.map((item, i) => (
                    <span key={i}> {item} </span>
                  ))}
                </div>
              </div>
            ))}

            {item.company?.map((item, i) => (
              <ul key={i}>
                <h3>{item.title}</h3>
                {item.texts?.map((item, i) => (
                  <li key={i}> {item} </li>
                ))}
              </ul>
            ))}

            <ul>
              {item.Policy?.map((item, i) => (
                <ul key={i}>
                  <h3>{item.title}</h3>
                  {item.texts?.map((item, i) => (
                    <li key={i}> {item} </li>
                  ))}
                </ul>
              ))}
            </ul>

            <div className="flex flex-col ">
              {item["Get In Touch"]?.map((item, i) => (
                <span key={i}> {item} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};
