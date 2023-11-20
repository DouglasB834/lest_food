"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const [nome, setNome] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [recaptchaValue, SetRecaptchaValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("enviado");
  };
  const key = "6LcGKxkoAAAAALF-PNmMHPpYmeOTNeLUHB0UcLjd";

  return (
    <section
      id="contact"
      className="container flex-wrap md:flex-nowrap justify-between flex gap-4 h-full md:w-full  "
    >
      <div className="bg-white w-full md:w-[55%]  border border-amber-300 p-4 rounded-md">
        <h2 className="text-lg md:text-2xl font-bold">
          Contact us <span className="text-amber-500">Let`s food</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 rounded-md "
        >
          <input
            type="text"
            placeholder="Name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className=" border-2 border-amber-200 p-1 rounded-md"
          />
          <input
            type="email"
            value={email}
            placeholder="enviar email"
            onChange={(e) => setEmail(e.target.value)}
            className=" border-2 border-amber-200 p-1 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" border-2 border-amber-200 p-1 rounded-md"
          />
          <ReCAPTCHA sitekey={key} onChange={SetRecaptchaValue} />

          <button
            disabled={email && recaptchaValue ? false : true}
            type="submit"
            className={`${
              recaptchaValue && email
                ? "bg-amber-500 text-gray-900"
                : "bg-gray-100 text-gray-300"
            } p-2 `}
          >
            Enviar
          </button>
        </form>
        <div className="mt-4 px-2">
          <ul className="flex justify-between">
            <li>Phone</li>
            <li>email</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className=" w-full md:w-[42%] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30280289.23336504!2d-57.10966946576377!3d-13.473324226032979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1695139762312!5m2!1spt-BR!2sbr"
          loading="lazy"
          className="w-full  h-[250px] md:h-[100%] "
        ></iframe>
      </div>
    </section>
  );
};
