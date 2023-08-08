"use client";

import HeadSection from "../Components/HeadSection/HeadSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import { useEffect, useState } from "react";

function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          {/* Home Page */}
          <HeadSection />
          <AboutSection />
          <SkillsSection />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Home;
