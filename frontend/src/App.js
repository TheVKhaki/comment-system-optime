import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
//Page
import Home from "./page/Home";
import PrivacyPolicy from "./page/PrivacyPolicy";
import FAQ from "./page/FAQ";
import AboutUs from "./page/AboutUs";
import PrivateSale from "./page/PrivateSale";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components
import { useEffect } from "react";

function RootBoundary() {
  document.location.href = "/";
  return null;
}

//TODO: PrivacyPolicy, FAQ and AboutUs route changes to {route path}-new and it must change after finilizing to previous route path and the nginx must edit also
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RootBoundary />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "private-sale",
    element: <PrivateSale />,
  },
]);
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
