//Main.jsx

import avatar from "../../images/Avatar.png";
import editButton from "../../images/EditButton.png";
import addButton from "../../images/AddButton.png";

// import logo from "../../images/AroundTheUS.png";

export default function Main() {
  return (
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
                <p className="explorer-info__job">Matemático & Web Developer</p>
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

      <section className="box">{/* Aquí van los popups*/}</section>
    </main>
  );
}
