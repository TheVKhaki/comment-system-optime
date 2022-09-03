import Hero from "../components/Hero";
import SocialSection from "../components/Social";
import RoadMapStep1 from "../components/RoadMapStep1";
import RoadMapStep2 from "../components/RoadMapStep2";
import RoadMapStep3 from "../components/RoadMapStep3";
import RoadMapStep4 from "../components/RoadMapStep4";
import OurTeam from "../components/OurTeam";
import SocialResponsive from "../components/SocialResponsive";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
//custom hook
import useWindowSize from "../custom hook/ResizeEvent";
import { ApiClient } from "../api/client/ApiClient";
import Header from "../components/Header";
const Home = () => {
  const [width, height] = useWindowSize();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
  const height700 = useMediaQuery({ maxHeight: 700 });
  const height600 = useMediaQuery({ minHeight: 600 });
  const width992 = useMediaQuery({ minWidth: 992 });
  const [finalSpinVAlue, setFinalSpinVAlue] = useState(0);
  const api_client = new ApiClient({
    BASE: process.env.REACT_APP_OWL_URL,
  });
  useEffect(() => {
    const header = document.querySelector("header");
    if (height700 && height600 && width992) {
      if (finalSpinVAlue >= 1) {
        header.classList.remove("d-flex");
        header.classList.add("d-none");
      } else {
        header.classList.remove("d-none");
        header.classList.add("d-flex");
      }
    } else {
      header.classList.remove("d-none");
      header.classList.add("d-flex");
    }
  }, [finalSpinVAlue, width992, height600, height700]);

  window.addEventListener("load", function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  });
  // useEffect(() => {
  //   const sectionHero = document.querySelector(".hero");
  //   sectionHero.scrollIntoView();
  // }, []);
  // const main = useRef();
  // useEffect(() => {
  //   console.log(main.current);
  // }, [main]);
  useEffect(() => {}, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const bullets = document.querySelectorAll(".bullet-section span");
    const root = document.querySelector("#root");
    const app = document.querySelector(".App");
    const btnHero = document.querySelector(".btn-hero");
    const navLink = document.querySelectorAll(".navbar-nav .nav-link");
    const content = document.querySelector("main");
    const all = document.querySelectorAll("*");
    const locationHash = window.location.hash;
    let spinValue = 0;
    let canScroll = true;
    const scrollContent = (count) => {
      setFinalSpinVAlue(count);
      content.setAttribute("style", `transform:translateY(-${count * 100}vh)`);
    };
    switch (locationHash) {
      case "#home":
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        bullets[0].style.backgroundColor = "#e28001";
        spinValue = 0;
        scrollContent(spinValue);
        // setTimeout(() => {
        //   navigate("/");
        // }, 100);
        break;
      case "#campaigns":
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        bullets[1].style.backgroundColor = "#e28001";
        spinValue = 1;
        scrollContent(spinValue);
        // setTimeout(() => {
        //   navigate("/");
        // }, 100);
        break;
      case "#roadmapp":
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        bullets[2].style.backgroundColor = "#e28001";
        spinValue = 2;
        scrollContent(spinValue);
        // setTimeout(() => {
        //   navigate("/");
        // }, 100);
        break;
      case "#litepaper":
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        bullets[4].style.backgroundColor = "#e28001";
        spinValue = 4;
        scrollContent(spinValue);
        // setTimeout(() => {
        //   navigate("/");
        // }, 100);
        break;
      case "#our-teamm":
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        bullets[6].style.backgroundColor = "#e28001";
        spinValue = 6;
        scrollContent(spinValue);
        // setTimeout(() => {
        //   navigate("/");
        // }, 100);
        break;
      case "#airdrops":
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
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
    // btnHero.addEventListener("click", function (e) {
    //   all.forEach((element) => {
    //     if (element.innerHTML === "") {
    //       console.log(element);
    //     }
    //   });
    //   bullets.forEach((bulletColor) => {
    //     bulletColor.style.backgroundColor = "white";
    //   });
    //   bullets[1].style.backgroundColor = "#e28001";
    //   spinValue = 1;
    //   scrollContent(spinValue);
    //   // setTimeout(() => {
    //   //   navigate("/");
    //   // }, 100);
    // });
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
      root.addEventListener(
        "wheel",
        function (e) {
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
        },
        { passive: true }
      );

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
      <Header />
      <main>
        <Hero />
        {isTabletOrMobile ? (
          <SocialResponsive api_client={api_client} />
        ) : (
          <SocialSection api_client={api_client} />
        )}
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
          aria-hidden="true"
          style={{ backgroundColor: "#e28001" }}
        ></span>
        <span data-section="#social" aria-hidden="true"></span>
        <span data-section="#roadmap" aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span data-section="#our-team" aria-hidden="true"></span>
        <span data-section="#footer" aria-hidden="true"></span>
      </div>
    </>
  );
};

export default Home;
