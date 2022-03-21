import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
