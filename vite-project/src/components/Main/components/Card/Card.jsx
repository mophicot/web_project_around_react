//Card.jsx

import trashIcon from "../../../../images/Trash.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  const { onCardClick } = props; //para el ImagePopup

  return (
    <li className="card">
      <div className="element">
        <div className="element__photo-frame">
          <img
            src={link}
            alt={name}
            className="element__photo"
            onClick={() => onCardClick(props.card)} //al hacer click abre el ImagePopup
          />

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
