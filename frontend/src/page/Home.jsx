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
import { useMediaQuery } from "react-responsive";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";

const Home = () => {
  const [width, height] = useWindowSize();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  // window.addEventListener("load", function () {
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 50);
  // });
  // useEffect(() => {
  //   const sectionHero = document.querySelector(".hero");
  //   sectionHero.scrollIntoView();
  // }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const bullets = document.querySelectorAll(".bullet-section span");
    const root = document.querySelector("#root");
    const app = document.querySelector(".App");
    const btnHero = document.querySelector(".btn-hero");
    const navLink = document.querySelectorAll(".navbar-nav .nav-link");
    const content = document.querySelector("main");
    let spinValue = 0;
    let canScroll = true;
    btnHero.addEventListener("click", function (e) {
      bullets.forEach((bulletColor) => {
        bulletColor.style.backgroundColor = "white";
      });
      bullets[1].style.backgroundColor = "#e28001";
      spinValue = 1;
      scrollContent(spinValue);
      // setTimeout(() => {
      //   navigate("/");
      // }, 100);
    });
    navLink.forEach((navLink, indexbullet) => {
      navLink.addEventListener("click", function (e) {
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        switch (e.target.hash) {
          case "#home":
            bullets[0].style.backgroundColor = "#e28001";
            spinValue = 0;
            scrollContent(spinValue);
            // setTimeout(() => {
            //   navigate("/");
            // }, 100);
            break;
          case "#campaigns":
            bullets[1].style.backgroundColor = "#e28001";
            spinValue = 1;
            scrollContent(spinValue);
            // setTimeout(() => {
            //   navigate("/");
            // }, 100);
            break;
          case "#roadmapp":
            bullets[2].style.backgroundColor = "#e28001";
            spinValue = 2;
            scrollContent(spinValue);
            // setTimeout(() => {
            //   navigate("/");
            // }, 100);
            break;
          case "#litepaper":
            bullets[4].style.backgroundColor = "#e28001";
            spinValue = 4;
            scrollContent(spinValue);
            // setTimeout(() => {
            //   navigate("/");
            // }, 100);
            break;
          case "#our-teamm":
            bullets[6].style.backgroundColor = "#e28001";
            spinValue = 6;
            scrollContent(spinValue);
            // setTimeout(() => {
            //   navigate("/");
            // }, 100);
            break;
          case "#airdrops":
            bullets[3].style.backgroundColor = "#e28001";
            spinValue = 3;
            scrollContent(spinValue);
            // setTimeout(() => {
            //   navigate("/");
            // }, 100);
            break;
          default:
            break;
        }
      });
    });
    let animationDuration = 700;
    var lastTime = new Date().getTime();
    if (app.classList.contains("fullscreen")) {
      root.addEventListener("wheel", function (e) {
        var currentTime = new Date().getTime();

        if (currentTime - lastTime < animationDuration) {
          e.preventDefault();
          return;
        }
        if (canScroll) {
          bullets.forEach((bulletColor) => {
            bulletColor.style.backgroundColor = "white";
          });
          if (e.deltaY > 0) {
            if (spinValue < sections.length - 1) {
              spinValue += 1;
            }
          } else {
            if (spinValue !== 0) {
              spinValue -= 1;
            }
          }
          bullets[spinValue].style.backgroundColor = "#e28001";
          scrollContent(spinValue);
        }
        lastTime = currentTime;
        // setTimeout(() => {
        //   canScroll = true;
        // }, 2000);
      });

      window.addEventListener("keydown", function keys(e) {
        if (canScroll) {
          canScroll = false;
          bullets.forEach((bulletColor) => {
            bulletColor.style.backgroundColor = "white";
          });
          if (e.keyCode === 40) {
            if (spinValue < sections.length - 1) {
              spinValue += 1;
            }
          }
          if (e.keyCode === 38) {
            if (spinValue !== 0) {
              spinValue -= 1;
            }
          }
          bullets[spinValue].style.backgroundColor = "#e28001";
          scrollContent(spinValue);
        }
        setTimeout(() => {
          canScroll = true;
        }, 700);
      });
    }
    const scrollContent = (count) => {
      content.setAttribute("style", `transform:translateY(-${count * 100}vh)`);
    };

    // let index = 0;

    // let lastTime = 0;
    bullets.forEach((bullet, indexbullet) => {
      bullet.addEventListener("click", function (params) {
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        bullet.style.backgroundColor = "#e28001";
        spinValue = indexbullet;
        scrollContent(spinValue);
      });
    });
  }, [width]);
  return (
    <>
      <main>
        <Hero />
        {isTabletOrMobile ? <SocialResponsive /> : <SocialSection />}
        <RoadMapStep1 />
        <RoadMapStep2 />
        <RoadMapStep3 />
        <RoadMapStep4 />
        <OurTeam />
        <Footer />
      </main>
      <div className="bullet-section">
        <span
          data-section="#hero"
          style={{ backgroundColor: "#e28001" }}
        ></span>
        <span data-section="#social"></span>
        <span data-section="#roadmap"></span>
        <span></span>
        <span></span>
        <span></span>
        <span data-section="#our-team"></span>
        <span data-section="#footer"></span>
      </div>
    </>
  );
};

export default Home;
