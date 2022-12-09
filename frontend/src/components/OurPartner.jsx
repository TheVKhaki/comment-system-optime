//media
import { Container } from "react-bootstrap";
import OurPartnerApi from "../api/OurPartner";
import { useState } from "react";
const OurPartner = () => {
  const [ourPartnerApi, setOurPartnerApi] = useState(OurPartnerApi);
  return (
    <>
      <div className="our-partner">
        <Container>
          <div className="header-our-partner">
            <span>Powered By</span>
          </div>
          <div className="our-partner-news-tricker">
            <div className="slide-news-tricker">
              {ourPartnerApi.map((ourpartner, index) => {
                return (
                  <a
                    href="#"
                    className={`item-news-tricker ${"logo" + index}`}
                    key={ourpartner.id}
                  >
                    <img src={ourpartner.imgSrc} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurPartner;
