import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import SocialSection from "./components/Social";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
