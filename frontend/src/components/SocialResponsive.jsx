import { useEffect, useState } from "react";
//media
import socialRes from "../images/social-responsive.svg";
//icon
import { IconContext } from "react-icons";
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaTrello,
} from "react-icons/fa";
const SocialResponsive = () => {
  const [dataSocial, setDataSocial] = useState({
    telegramChannel: "",
    twitterFollowers: "",
    youtubeSubscribers: "",
  });
  useEffect(() => {
    fetch("https://stag.owl.qpoker.io/api/v1/public/social-growth")
      .then((response) => response.json())
      .then((data) => socialGrowth(data));
    function socialGrowth(dataSocial) {
      const telegramGrowth =
        ((dataSocial.telegram_channel.now -
          dataSocial.telegram_channel.last_week) /
          dataSocial.telegram_channel.last_week) *
        100;
      const twitterGrowth =
        ((dataSocial.twitter_followers.now -
          dataSocial.twitter_followers.last_week) /
          dataSocial.twitter_followers.last_week) *
        100;
      const youtubeGrowth =
        ((dataSocial.youtube_subscribers.now -
          dataSocial.youtube_subscribers.last_week) /
          dataSocial.youtube_subscribers.last_week) *
        100;
      setDataSocial({
        telegramChannel: Math.abs(telegramGrowth.toFixed(1)),
        twitterFollowers: Math.abs(twitterGrowth.toFixed(1)),
        youtubeSubscribers: Math.abs(youtubeGrowth.toFixed(1)),
      });
    }
  }, []);

  return (
    <>
      <section className="social-responsive" id="campaigns">
        <div className="header-social">
          <h2>NFT Giveaways Go Mammoth</h2>
          <p>Ride on to the Rewards</p>
        </div>
        <div className="image-social-responsive">
          <img src={socialRes} alt="" className="svg-responsive-social" />
          <a
            href="https://twitter.com/QPoker_io"
            className="text-telegram text-image-responsive"
          >
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
            <span>Twitter</span>
            <p>
              +{dataSocial.twitterFollowers}% <span>(7d %)</span>
            </p>
          </a>
          <a
            href="https://t.me/qpokerio"
            className="text-twitter text-image-responsive"
          >
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div>
                <FaTelegramPlane />
              </div>
            </IconContext.Provider>
            <span>Telegram</span>
            <p>
              +{dataSocial.telegramChannel}% <span>(7d %)</span>
            </p>
          </a>
          <a
            href="https://youtu.be/147ioPrSuaM"
            className="text-youtube text-image-responsive"
          >
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div>
                <FaYoutube />
              </div>
            </IconContext.Provider>
            <span>Youtube</span>
            <p>
              +{dataSocial.youtubeSubscribers}% <span>(7d %)</span>
            </p>
          </a>
          <a
            href="https://trello.com/b/RsomwpDG"
            className="text-trello text-image-responsive"
          >
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div>
                <FaTrello />
              </div>
            </IconContext.Provider>
            <span>Trello</span>
            <p style={{ color: "white" }}>ComingSoon</p>
          </a>
          <a href="#" className="text-option-1 text-image-responsive-2">
            <span>$50,000</span>
            <p>Join Twitter</p>
          </a>
          <a href="#" className="text-option-2 text-image-responsive-2">
            <span>$75,000</span>
            <p>COMING SOON</p>
          </a>
          <a href="#" className="text-option-3 text-image-responsive-2">
            <span>$125,000</span>
            <p>COMING SOON</p>
          </a>
          <a href="#" className="text-option-4 text-image-responsive-2">
            <span>$200,000</span>
            <p>COMING SOON</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default SocialResponsive;
