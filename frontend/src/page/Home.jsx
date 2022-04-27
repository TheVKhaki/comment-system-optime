import Hero from "../components/Hero";
import SocialSection from "../components/Social";
import RoadMapStep1 from "../components/RoadMapStep1";
import RoadMapStep2 from "../components/RoadMapStep2";
import RoadMapStep3 from "../components/RoadMapStep3";
import RoadMapStep4 from "../components/RoadMapStep4";
import OurTeam from "../components/OurTeam";
import SocialResponsive from "../components/SocialResponsive";
import Footer from "../components/Footer";
import { useEffect } from "react";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";

const Home = () => {
  const [width, height] = useWindowSize();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const bullets = document.querySelectorAll(".bullet-section span");
    let index = 0;
    let animationDuration = 1000;
    let lastTime = 0;
    bullets.forEach((bullet, indexbullet) => {
      bullet.addEventListener("click", function (params) {
        sections.forEach((section, i) => {
          if (indexbullet === i) {
            section.scrollIntoView({ behavior: "smooth" });
            index = indexbullet;
          }
        });
      });
    });

    document.addEventListener("keydown", function keys(e) {
      if (width > 992) {
        if (e.keyCode === 38) {
          console.log("keydown 38");
          if (index < 1) return;
          index--;
          sections.forEach((section, i) => {
            if (i === index) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          });
        }
        if (e.keyCode === 40) {
          console.log("keydown 40");
          if (index > 5) return;
          index++;
          sections.forEach((section, i) => {
            if (i === index) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          });
        }
      }
    });
    document.addEventListener(
      "wheel",
      function (e) {
        console.log("keydown wheel");
        const delta = e.wheelDelta;
        const currentTime = new Date().getTime();
        if (currentTime - lastTime < animationDuration) {
          e.preventDefault();
          return;
        }
        if (delta < 0) {
          if (index > 6) return;
          index++;
          sections.forEach((section, i) => {
            if (i === index) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          });
        } else {
          if (index < 1) return;
          index--;
          sections.forEach((section, i) => {
            if (i === index) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          });
        }
        lastTime = currentTime;
      },
      { passive: false }
    );
  }, [width]);

  return (
    <>
      <main>
        <Hero />
        {width > 992 ? <SocialSection /> : <SocialResponsive />}
        <RoadMapStep1 />
        <RoadMapStep2 />
        <RoadMapStep3 />
        <RoadMapStep4 />
        <OurTeam />
        <Footer />
      </main>
    </>
  );
};

export default Home;
