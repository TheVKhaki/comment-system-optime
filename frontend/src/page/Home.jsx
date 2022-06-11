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
import { scrollIntoView } from "seamless-scroll-polyfill";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const [width, height] = useWindowSize();
  window.addEventListener("load", function () {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  });
  useEffect(() => {
    const sectionHero = document.querySelector(".hero");
    sectionHero.scrollIntoView();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const bullets = document.querySelectorAll(".bullet-section span");
    const root = document.querySelector("#root");
    const btnHero = document.querySelector(".btn-hero");
    const navLink = document.querySelectorAll(".navbar-nav .nav-link");
    btnHero.addEventListener("click", function (e) {
      bullets.forEach((bulletColor) => {
        bulletColor.style.backgroundColor = "white";
      });
      bullets[1].style.backgroundColor = "#e28001";
      setTimeout(() => {
        navigate("/");
      }, 100);
    });
    navLink.forEach((navLink, indexbullet) => {
      navLink.addEventListener("click", function (e) {
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        switch (e.target.hash) {
          case "#hero":
            bullets[0].style.backgroundColor = "#e28001";
            setTimeout(() => {
              navigate("/");
            }, 100);
            break;
          case "#social":
            bullets[1].style.backgroundColor = "#e28001";
            setTimeout(() => {
              navigate("/");
            }, 100);
            break;
          case "#roadmap":
            bullets[2].style.backgroundColor = "#e28001";
            setTimeout(() => {
              navigate("/");
            }, 100);
            break;
          case "#our-team":
            bullets[6].style.backgroundColor = "#e28001";
            setTimeout(() => {
              navigate("/");
            }, 100);
            break;
          case "#footer":
            bullets[7].style.backgroundColor = "#e28001";
            setTimeout(() => {
              navigate("/");
            }, 100);
            break;
          default:
            break;
        }
      });
    });
    let index = 0;
    let animationDuration = 400;
    let lastTime = 0;
    bullets.forEach((bullet, indexbullet) => {
      bullet.addEventListener("click", function (params) {
        bullets.forEach((bulletColor) => {
          bulletColor.style.backgroundColor = "white";
        });
        bullet.style.backgroundColor = "#e28001";
        sections.forEach((section, i) => {
          if (indexbullet === i) {
            scrollIntoView(section, {
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
            index = indexbullet;
          }
        });
      });
    });

    document.addEventListener("keydown", function keys(e) {
      if (width > 992) {
        if (e.keyCode === 38) {
          if (index < 1) return;
          index--;
          sections.forEach((section, i) => {
            if (i === index) {
              bullets.forEach((bulletColor) => {
                bulletColor.style.backgroundColor = "white";
              });
              bullets[i].style.backgroundColor = "#e28001";
              scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
              });
            }
          });
        }
        if (e.keyCode === 40) {
          if (index > 6) return;
          index++;
          sections.forEach((section, i) => {
            if (i === index) {
              bullets.forEach((bulletColor) => {
                bulletColor.style.backgroundColor = "white";
              });
              bullets[i].style.backgroundColor = "#e28001";
              scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
              });
            }
          });
        }
      }
    });

    root.addEventListener(
      "wheel",
      function (e) {
        if (width !== 0 && width > 992) {
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
                bullets.forEach((bulletColor) => {
                  bulletColor.style.backgroundColor = "white";
                });
                bullets[i].style.backgroundColor = "#e28001";
                setTimeout(() => {
                  scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });
                }, 400);
              }
            });
          } else {
            if (index < 1) return;
            index--;
            sections.forEach((section, i) => {
              if (i === index) {
                bullets.forEach((bulletColor) => {
                  bulletColor.style.backgroundColor = "white";
                });
                bullets[i].style.backgroundColor = "#e28001";
                setTimeout(() => {
                  scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });
                }, 400);
              }
            });
          }
          lastTime = currentTime;
        }
      },
      { passive: false }
    );
  }, [width]);

  return (
    <>
      <main>
        <Hero />
        {width > 991 ? <SocialSection /> : <SocialResponsive />}
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
