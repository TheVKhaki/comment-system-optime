import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace("https://qpoker.io/docs/qpoker-litepaper.pdf");
  }, []);

  return <></>;
};

export default RedirectPage;
