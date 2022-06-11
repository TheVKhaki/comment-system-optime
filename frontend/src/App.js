import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  useEffect(() => {
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
    <div className="App">
      {/* <Login />  */}
      <Header />
      <Home />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
