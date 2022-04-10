import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import SocialSection from "./components/Social";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<SocialSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
