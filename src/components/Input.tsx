import React from "react";

export const Input = (type: string, str: string) => {
  return <input type={`${type}`} placeholder={`${str}`} />;
};
