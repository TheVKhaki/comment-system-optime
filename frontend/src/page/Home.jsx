import Hero from "../components/Hero";
import SocialSection from "../components/Social";
import RoadMap from "../components/RoadMap";
import { useNavigate } from "react-router-dom";
import OurTeam from "../components/OurTeam";
const Home = () => {
  // let navigate = useNavigate();
  // console.log(navigate());
  const diactiveScroll = () => {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 40: 1 };
    var sections = ["#hero", "#social"];
    function preventDefault(e) {
      console.log(keys[e.keyCode]);
    }

    function preventDefaultForScrollKeys(e) {
      console.log(keys[e.keyCode]);
    }
    var supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
      );
    } catch (e) {}
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  };
  // diactiveScroll();
  window.addEventListener("keydown", function (e) {
    console.log(e);
  });
  return (
    <>
      <main>
        <Hero />
        <SocialSection />
        <RoadMap />
        <OurTeam />
      </main>
    </>
  );
};

export default Home;
