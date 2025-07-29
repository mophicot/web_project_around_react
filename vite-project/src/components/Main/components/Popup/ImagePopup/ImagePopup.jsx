//ImagePopup.jsx

export default function ImagePopup(props) {
  const { link, name } = props;
  return (
    <figure className="image-popup__container">
      <img src={link} alt={name} className="image-popup__photo" />
      <figcaption className="image-popup__title">{name}</figcaption>
    </figure>
  );
}
