//NewCard.jsx

export default function NewCard() {
  return (
    <form className="form" id="form-new-card" noValidate>
      <h2 className="form__title">Nuevo Lugar</h2>
      <fieldset className="form__fieldset">
        <label htmlFor="new-place">Título de la nueva tarjeta</label>
        <input
          type="text"
          className="form__input form__new-place"
          id="new-place"
          name="new-place"
          placeholder="Título"
          required
          minLength="2"
          maxLength="30"
        />

        <span className="new-place-input-error form__input-error"></span>

        <label htmlFor="url">Url de la imagen</label>
        <input
          type="url"
          className="form__input form__url"
          id="url"
          name="url"
          placeholder="Enlace a la imagen"
          required
        />

        <span className="url-input-error form__input-error"></span>

        <button type="submit" className="form__submit">
          Crear
        </button>
      </fieldset>
    </form>
  );
}
