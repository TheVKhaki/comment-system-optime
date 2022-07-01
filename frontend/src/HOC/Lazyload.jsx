import { useState, useEffect } from "react";
const Lazyload = (props) => {
  const [load, setLoad] = useState(false);
  window.addEventListener("load", function (params) {
    console.log(params);
    setLoad(true);
  });

  return <>{load && props.children}</>;
};

export default Lazyload;
