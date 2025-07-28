//Main.jsx

import avatar from "../../images/Avatar.png";
import editButton from "../../images/EditButton.png";
import addButton from "../../images/AddButton.png";

import { useState } from "react";

// import Popup from "../Popup/Popup";
import Popup from "../Main/components/Popup/Popup";
import NewCard from "../Main/components/Popup/form/NewCard/NewCard";
import EditProfile from "../Main/components/Popup/form/EditProfile/EditProfile";
import EditAvatar from "../Main/components/Popup/form/EditAvatar/EditAvatar";

export default function Main() {
  // Popups
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="main">
      <section className="profile" id="profile">
        <div className="profile-scorecard">
          <div className="profile-id">
            <button
              type="button"
              aria-label="Edit Avatar"
              className="profile-id__avatar-frame"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            >
              <img
                src={avatar}
                alt="Avatar del explorador"
                className="profile-id__avatar"
              />
            </button>

            <ul className="explorer-info">
              <li className="explorer-info__item">
                <div className="explorer-info__tag">
                  <h1 className="explorer-info__name-complete">
                    Sergio Rangel Ordóñez
                  </h1>
                  <button
                    type="button"
                    aria-label="Edit Profile"
                    className="explorer-info__edit"
                    onClick={() => handleOpenPopup(editProfilePopup)}
                  >
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

          <button
            type="button"
            aria-label="Add Card"
            className="profile-id__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
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

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
