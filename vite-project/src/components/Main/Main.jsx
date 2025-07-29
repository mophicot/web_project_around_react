//Main.jsx

//IMPORTACIONES
//imagenes
import avatar from "../../images/Avatar.png";
import editButton from "../../images/EditButton.png";
import addButton from "../../images/AddButton.png";

//useState
import { useState } from "react";

//Popup;
import Popup from "../Main/components/Popup/Popup";
import NewCard from "../Main/components/Popup/form/NewCard/NewCard";
import EditProfile from "../Main/components/Popup/form/EditProfile/EditProfile";
import EditAvatar from "../Main/components/Popup/form/EditAvatar/EditAvatar";
//Card
import Card from "./components/Card/Card";

//CONSTANTES
//datos ficticios
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

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
        {/* Cards */}
        <ul className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </ul>
      </section>

      {/* Popups */}

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
