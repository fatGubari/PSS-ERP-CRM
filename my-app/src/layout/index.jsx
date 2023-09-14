import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
