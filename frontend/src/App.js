import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
//Page
import Home from "./page/Home";
<<<<<<< HEAD
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import SocialSection from "./components/Social";
=======
import Login from "./page/Login";
//Components
import Header from "./components/Header";

import SocialSection from "./components/Social";
//Router
import { Route, Routes } from "react-router-dom";
>>>>>>> comeing-soon-deploy-1

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<SocialSection />} />
      </Routes>
      <Footer />
=======
      {/* <Login /> */}
      <Header />
      <Home />
>>>>>>> comeing-soon-deploy-1
    </div>
  );
}

export default App;
