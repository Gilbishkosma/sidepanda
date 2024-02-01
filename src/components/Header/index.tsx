import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img src={"images/logo.png"} alt="Logo" />
      <div className="links">
        <p>Menu</p>
        <p>Contact us</p>
        <button>Share Link</button>
      </div>
    </div>
  );
};

export default Header;
