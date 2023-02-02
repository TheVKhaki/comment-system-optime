import { useEffect, useState } from "react";
//icon
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { gsap } from "gsap";
import "@dotlottie/player-component";
import lottie12 from "../lottie/12000.lottie";
import lottie120 from "../lottie/120000.lottie";
import USDT from "../images/USDT icon.svg";
import QMatic from "../images/QP_Logo-23.svg";
import telegramIcon from "../images/telegram-app.png";
import youtubeIcon from "../images/youtube.png";
import airdropIcon from "../images/airdropicon.svg";

const SocialResponsive = (_props) => {
  const [dataSocial, setDataSocial] = useState({
    telegramChannel: "",
    twitterFollowers: "",
    youtubeSubscribers: "",
    airdropUsers: "",
  });
  const props = _props;
  useEffect(() => {
    let error_count = 0;
    let error_count_max = 20;
    const make_request = setInterval(() => {
      props.api_client.public
        .getPublicSocialGrowth()
        .catch((error) => {
          if (error_count_max > error_count) {
            console.error("setDataSocial", error);
            setDataSocial({
              telegramChannel: "pending ...",
              twitterFollowers: "pending ...",
              youtubeSubscribers: "pending ...",
              airdropUsers: "pending ...",
            });
            error_count++;
          } else {
            setDataSocial({
              telegramChannel: " (Please refresh !) ",
              twitterFollowers: " (Please refresh !) ",
              youtubeSubscribers: " (Please refresh !) ",
              airdropUsers: " (Please refresh !) ",
            });
            clearInterval(make_request);
          }
        })
        .then((data) => {
          if (data != undefined) {
            clearInterval(make_request);

            socialGrowth(data);
          }
        });
    }, 2000);
    function socialGrowth(dataSocial) {
      // const telegramGrowth =
      //   ((dataSocial.telegram_channel.now -
      //     dataSocial.telegram_channel.last_week) /
      //     dataSocial.telegram_channel.last_week) *
      //   100;
      // const twitterGrowth =
      //   ((dataSocial.twitter_followers.now -
      //     dataSocial.twitter_followers.last_week) /
      //     dataSocial.twitter_followers.last_week) *
      //   100;
      // const youtubeGrowth =
      //   ((dataSocial.youtube_subscribers.now -
      //     dataSocial.youtube_subscribers.last_week) /
      //     dataSocial.youtube_subscribers.last_week) *
      //   100;
      // const airdropUser =
      //   ((dataSocial.airdrop_users.now - dataSocial.airdrop_users.last_week) /
      //     dataSocial.airdrop_users.last_week) *
      //   100;
      // setDataSocial({
      //   telegramChannel: Math.abs(telegramGrowth.toFixed(1)),
      //   twitterFollowers: Math.abs(twitterGrowth.toFixed(1)),
      //   youtubeSubscribers: Math.abs(youtubeGrowth.toFixed(1)),
      //   airdropUsers: Math.abs(airdropUser.toFixed(1)),
      // });
      setDataSocial({
        telegramChannel: new Intl.NumberFormat().format(
          dataSocial.telegram_group.now
        ),
        twitterFollowers: new Intl.NumberFormat().format(
          dataSocial.twitter_followers.now
        ),
        youtubeSubscribers: new Intl.NumberFormat().format(
          dataSocial.youtube_subscribers.now
        ),
        airdropUsers: new Intl.NumberFormat().format(
          dataSocial.airdrop_users.now
        ),
      });
    }
  }, []);
  useEffect(() => {
    gsap.to(
      document.querySelector(
        ".social-responsive .image-social-responsive .text-telegram span"
      ),
      {
        keyframes: {
          "0%": { color: "#fff" },
          "10%": { color: "#1da1f2" },
          "89%": { color: "#1da1f2" },
          "90%": { color: "#fff" },
        },
        duration: 1.5,
        repeatDelay: 1.5,
        repeat: -1,
      }
    );
    gsap.to(
      document.querySelector(
        ".social-responsive .image-social-responsive .text-telegram svg"
      ),
      {
        keyframes: {
          "0%": { color: "#fff" },
          "10%": { color: "#1da1f2" },
          "89%": { color: "#1da1f2" },
          "90%": { color: "#fff" },
        },
        duration: 1.5,
        repeatDelay: 1.5,
        repeat: -1,
      }
    );
  }, []);

  return (
    <>
      <section className="social-responsive" id="campaigns">
        <div className="header-social">
          <h5>QPoker Airdrop</h5>
          <p>02.02.2023 - 02.03.2023</p>
        </div>
        <div className="award-airdrop">
          <div className="box box-1">
            <dotlottie-player
              src={lottie12}
              autoplay
              loop
              style={{ height: "100%", width: "100%" }}
            />
            <div className="currency-logo d-flex">
              <img src={USDT} alt="" />
              <span>+</span>
              <img src={QMatic} alt="" />
            </div>
          </div>
          <div className="sub-box sub-box-1">
            <p>100 Winners</p>
          </div>
          <div className="box box-2">
            <dotlottie-player
              src={lottie120}
              autoplay
              loop
              style={{ height: "100%", width: "100%" }}
            />
            <div className="currency-logo">
              <img src={QMatic} alt="" />
              <p>QMatic</p>
            </div>
          </div>
          <div className="sub-box sub-box-2">
            <p>1800 Winners</p>
          </div>
          <div className="box box-3">
            <span>$10 Instant + QPoker Early Access</span>
          </div>
          <div className="sub-box sub-box-3">
            <p>All Participants</p>
          </div>
        </div>
        <div className="wrapper-social-activity">
          <div className="social-activity">
            <div className="box box-1">
              <a
                href="https://T.me/qpoker_giveaways_bot"
                target="_blank"
                rel="noreferrer"
              >
                <img src={airdropIcon} alt="" />
                <p>Airdrop</p>
                <span>
                  {dataSocial.airdropUsers} <br />
                  <span>Participants</span>
                </span>
              </a>
            </div>
            <div className="box box-2">
              <a
                href="https://twitter.com/QPoker_io"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider
                  value={{ color: "#0088cc", size: "4rem" }}
                >
                  <>
                    <FaTwitter />
                  </>
                </IconContext.Provider>
                <p>Twitter</p>
                <span>
                  {dataSocial.twitterFollowers} <br />
                  <span>Followers</span>
                </span>
              </a>
            </div>
            <div className="box box-3">
              <a
                href="https://t.me/qpokergroup"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegramIcon} alt="" />
                <p>Telegram</p>
                <span>
                  {dataSocial.telegramChannel} <br />
                  <span>Members</span>
                </span>
              </a>
            </div>
            <div className="box box-4">
              <a
                href="https://youtube.com/@qpoker"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtubeIcon} alt="" />
                <p>Youtube</p>
                <span>
                  {dataSocial.youtubeSubscribers} <br />
                  <span>Subscribers</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="header-social">
          <h2>NFT Giveaways Go Mammoth</h2>
          <p>Ride on to the Rewards</p>
        </div>
        <div className="image-social-responsive">
          <img src={socialRes} alt="" className="svg-responsive-social" />
          <a
            href="https://twitter.com/QPoker_io"
            className="text-telegram text-image-responsive"
            target="_blank"
            rel="noreferrer"
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
            href="https://t.me/qpoker_io"
            className="text-twitter text-image-responsive"
            target="_blank"
            rel="noreferrer"
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
            href="https://youtu.be/6O_6_K3tr5c"
            className="text-youtube text-image-responsive"
            target="_blank"
            rel="noreferrer"
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
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <div>
                <FaTrello />
              </div>
            </IconContext.Provider>
            <span>Trello</span>
            <p style={{ color: "white" }}>Executive Board</p>
          </a>
          <a href="#" className="text-option-1 text-image-responsive-2">
            <span>$50,000</span>
            <p>Getting Started 🔥</p>
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
        </div> */}
      </section>
    </>
  );
};

export default SocialResponsive;
