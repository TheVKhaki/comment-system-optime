import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    window.location.replace(`${window.location.origin}/docs/qpoker-litepaper.pdf`);
  }, []);
  return <></>;
};

export default RedirectPage;
