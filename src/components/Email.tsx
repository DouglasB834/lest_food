"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const Email = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [recaptchaValue, SetRecaptchaValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const key = "6LcGKxkoAAAAALF-PNmMHPpYmeOTNeLUHB0UcLjd";

  return (
    <div className="flex flex-col justify-center items-center h-[300px] w-full">
      <h2>enviar email</h2>
      <form onSubmit={handleSubmit} className="bg-slate-500 p-4">
        <input
          type="email"
          placeholder="enviar email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <ReCAPTCHA sitekey={key} onChange={SetRecaptchaValue} />

        <button
          disabled={email && recaptchaValue ? false : true}
          type="submit"
          value={email}
          className={`${
            recaptchaValue && email ? "bg-amber-500" : "bg-gray-700"
          }`}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
