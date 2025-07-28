//EditProfile.jsx

export default function EditProfile() {
  return (
    <form className="form" id="form-edit-profile" noValidate>
      <h2 className="form__title">Editar perfil</h2>
      <fieldset className="form__fieldset">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          className="form__input form__name"
          id="name"
          name="name"
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
        />

        <span className="name-input-error form__input-error"></span>

        <label htmlFor="about">Acerca de mí</label>
        <input
          type="text"
          className="form__input form__job"
          id="about"
          name="about"
          placeholder="Acerca de mí"
          required
          minLength="2"
          maxLength="200"
        />

        <span className="about-input-error form__input-error"></span>

        <button type="submit" className="form__submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
