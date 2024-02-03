import DownArrow from "../icons/downArrow";
import Share from "../icons/share";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img src={"images/logo.png"} alt="Logo" />
      <div className="links">
        <p>
          Menu <DownArrow />
        </p>
        <p>Contact us</p>
        <span className="navBtn">
          <Share /> Share Link
        </span>
      </div>
    </div>
  );
};

export default Header;
