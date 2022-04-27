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

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
