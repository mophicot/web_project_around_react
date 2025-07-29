//Header.jsx

import logo from "../../images/AroundTheUS.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-banner">
        <img
          src={logo}
          alt="Alrededor de los EE.UU."
          className="header-banner__logo"
        />
      </div>
    </header>
  );
}
