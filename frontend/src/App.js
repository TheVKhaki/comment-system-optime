import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
//Page
import Home from "./page/Home";

//Components
import Header from "./components/Header";
import SocialSection from "./components/Social";
import { useEffect, useState } from "react";

function App() {
  //animation btn-main
  useEffect(() => {
    // alert(`width ${window.innerWidth},
    // height ${window.innerHeight}`);
    // window.addEventListener("load", function () {
    //   const width = window.innerWidth;
    //   const height = window.innerHeight;
    //   alert(`width :${width}
    //   height:${height}`);
    // });
    const btnMain = document.querySelectorAll(".btn-main");
    const btnMainSpan = document.querySelectorAll(".btn-main span");
    btnMain.forEach((btnMain) => {
      btnMain.addEventListener("mouseenter", (e) => {
        const rect = btnMain.getBoundingClientRect();
        const parentOffset = {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        };
        const relX = e.pageX - parentOffset.left;
        const relY = e.pageY - parentOffset.top;
        btnMainSpan.forEach((btnMainSpan) => {
          btnMainSpan.style.top = relY + "px";
          btnMainSpan.style.left = relX + "px";
        });
      });
      btnMain.addEventListener("mouseleave", (e) => {
        const rect = btnMain.getBoundingClientRect();
        const parentOffset = {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        };

        const relX = e.pageX - parentOffset.left;
        const relY = e.pageY - parentOffset.top;
        btnMainSpan.forEach((btnMainSpan) => {
          btnMainSpan.style.top = relY + "px";
          btnMainSpan.style.left = relX + "px";
        });
      });
    });
  }, []);
  return (
    <div className="App fullscreen">
      <Home />
    </div>
  );
}

export default App;
