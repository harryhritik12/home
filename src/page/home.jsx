
import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Section from "../components/Sections";
import Team from "../components/Teams";

export default function Home() {
  return (
    <div> {/* Add padding to push content down */}
      <div className="h-full w-full">
        <Banner/>
        <About/>
        <Section />
        <Team/>
      </div>
    </div>
  );
}
