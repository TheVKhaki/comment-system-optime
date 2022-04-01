import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
