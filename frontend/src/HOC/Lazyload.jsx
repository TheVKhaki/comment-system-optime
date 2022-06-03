import { useState, useEffect } from "react";
const Lazyload = (props) => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    console.log("first");
  }, []);

  return <>{load && props.children}</>;
};

export default Lazyload;
