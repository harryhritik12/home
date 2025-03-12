import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Section from "../components/Sections";
import Team from "../components/Teams";
import FloatingSocialBar from "../components/FloatingSocialBar";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="relative">
      <div className="h-full w-full">
        <Banner />
        <About />
        <Section />
        <Team />
      </div>
      <FloatingSocialBar />
      <ScrollToTopButton />
    </div>
  );
}
