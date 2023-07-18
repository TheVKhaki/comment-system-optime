import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ListComments from "./components/ListComments";
import { getComments } from "./features/listComment";
import logoOptime from "./assets/logo-optime-white.png";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <>
      <div className="overlay-up">
        <p>
          Comment System For <img src={logoOptime} alt="" />
        </p>
      </div>
      <div className="overlay-down"></div>
      <ListComments />
    </>
  );
}

export default App;
