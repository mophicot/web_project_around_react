//App.jsx

import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import logo from "./images/AroundTheUS.png";
import avatar from "./images/Avatar.png";
import editButton from "./images/EditButton.png";
import addButton from "./images/AddButton.png";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="page">
      <header className="header">
        <div className="header-banner">
          <img
            src={logo}
            alt="Alrededor de los EE.UU."
            className="header-banner__logo"
          />
        </div>
      </header>
      <main className="main">
        <section className="profile" id="profile">
          <div className="profile-scorecard">
            <div className="profile-id">
              <div className="profile-id__avatar-frame">
                <img
                  src={avatar}
                  alt="Avatar del explorador"
                  className="profile-id__avatar"
                />
              </div>
              <ul className="explorer-info">
                <li className="explorer-info__item">
                  <div className="explorer-info__tag">
                    <h1 className="explorer-info__name-complete">
                      Sergio Rangel Ordóñez
                    </h1>
                    <button type="button" className="explorer-info__edit">
                      <img
                        src={editButton}
                        alt="Icono para editar nombre y ocupación"
                        className="explorer-info__edit-image"
                      />
                    </button>
                  </div>
                </li>
                <li className="explorer-info__item">
                  <p className="explorer-info__job">
                    Matemático & Web Developer
                  </p>
                </li>
              </ul>
            </div>

            <button type="button" className="profile-id__add-button">
              <img
                src={addButton}
                alt="Icono para añadir tarjeta"
                className="profile-id__add-button-image"
              />
            </button>
          </div>
        </section>
        <section className="places" id="places">
          <div className="elements">{/* Aquí iba el template */}</div>
        </section>

        <section className="box"></section>
      </main>
      <footer className="footer" id="footer">
        <div className="footer-banner">
          <p className="footer-banner__copyright">
            &#169; 2025 Around The U.S.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
