//Card.jsx

import trashIcon from "../../../../images/Trash.svg";
// import likeIcon from "../../../../images/MeGusta.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <li className="card">
      <div className="element">
        <div className="element__photo-frame">
          <img src={link} alt={name} className="element__photo" />

          <button
            type="button"
            className="element__trash-button"
            aria-label="Card Delete"
          >
            <img
              src={trashIcon}
              alt="Icono de la papelera"
              className="element__trash-image"
            />
          </button>
        </div>
        <div className="element__footer">
          <h2 className="element__title">{name}</h2>

          <button
            type="button"
            className={`element__like-button ${
              isLiked ? "element__like-button_active" : ""
            }`}
            aria-label="Card Like"
          ></button>
        </div>
      </div>
    </li>
  );
}
