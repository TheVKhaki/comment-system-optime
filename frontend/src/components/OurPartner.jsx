//media
import { Container } from "react-bootstrap";
import binanceLogo from "../images/binance.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
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
              {ourPartnerApi.map((ourpartner) => {
                // if (ourpartner.id <= 3) {
                return (
                  <a href="#" className="item-news-tricker" key={ourpartner.id}>
                    <img src={ourpartner.imgSrc} alt="" />
                  </a>
                );
                // }
              })}
            </div>
            {/* <div className="slide-news-tricker">
              {ourPartnerApi.map((ourpartner) => {
                if (ourpartner.id >= 3) {
                  return (
                    <a
                      href="#"
                      className="item-news-tricker"
                      key={ourpartner.id}
                    >
                      <img src={ourpartner.imgSrc} alt="" />
                    </a>
                  );
                }
              })}
            </div> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurPartner;
