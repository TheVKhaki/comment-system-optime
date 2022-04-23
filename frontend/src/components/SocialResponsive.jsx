import socialRes from "../images/socialRes.png";

const SocialResponsive = () => {
  return (
    <>
      <section className="social-responsive">
        <div className="header-social">
          <h2>New Generation of Hold’em Poker</h2>
          <p>proudly introducing hold’em and quess’em</p>
        </div>
        <div className="image-social-responsive">
          <img src={socialRes} alt="" />
          <a href="#" className="text-telegram text-image-responsive">
            <span>Telegram</span>
            <p>Under Gathering</p>
          </a>
          <a href="#" className="text-twitter text-image-responsive">
            <span>Twitter</span>
            <p>Under Gathering</p>
          </a>
          <a href="#" className="text-youtube text-image-responsive">
            <span>Youtube</span>
            <p>Under Gathering</p>
          </a>
          <a href="#" className="text-github text-image-responsive">
            <span>Github</span>
            <p>Under Gathering</p>
          </a>
          <a href="#" className="text-option-1 text-image-responsive-2">
            <span>145</span>
            <p>Project Manager</p>
          </a>
          <a href="#" className="text-option-2 text-image-responsive-2">
            <span>145</span>
            <p>Project Manager</p>
          </a>
          <a href="#" className="text-option-3 text-image-responsive-2">
            <span>145</span>
            <p>Project Manager</p>
          </a>
          <a href="#" className="text-option-4 text-image-responsive-2">
            <span>145</span>
            <p>Project Manager</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default SocialResponsive;
