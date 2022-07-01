import { useState, useEffect } from "react";
const Lazyload = (props) => {
  const [load, setLoad] = useState(false);
  window.addEventListener("load", function (params) {
    setLoad(true);
  });

  return <>{load && props.children}</>;
};

export default Lazyload;
