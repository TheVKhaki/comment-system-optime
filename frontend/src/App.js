import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "fullpage.js/dist/fullpage.min.css";
import "swiper/css";
import "swiper/css/pagination";
//Page
import Home from "./page/Home";
import Login from "./page/Login";
//Components
import Header from "./components/Header";

import SocialSection from "./components/Social";
//Router
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const itemMenu = document.querySelectorAll(
    ".offcanvas-body .navbar-nav .nav-link"
  );
  console.log(itemMenu);
  itemMenu.forEach((itemmenu) => {
    itemmenu.addEventListener("click", function () {
      var isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      if (window.location.hash && isChrome) {
        setTimeout(function () {
          var hash = window.location.hash;
          console.log(hash);
          window.location.hash = "";
          window.location.hash = hash;
        }, 300);
      }
    });
  });

  //animation btn-main
  useEffect(() => {
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
      {/* <Login />  */}
      <Header />
      <Home />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
