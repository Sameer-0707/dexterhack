import React from "react";
import HeroSection from "./HeroSection";
import FormalSection from "./FormalSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <HeroSection />
      <FormalSection />
      {/* Additional sections like 'New Arrivals', 'Trending', etc. can be added here */}
    </div>
  );
};

export default HomePage;
