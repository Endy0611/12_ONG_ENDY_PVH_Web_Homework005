"use client";

import React from "react";
import "../globals.css";

const ButtonComponent = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
     className="bg-indigo-800/50 hover:bg-indigo-800 text-white text-sm font-bold px-5 py-2 rounded-lg"
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
