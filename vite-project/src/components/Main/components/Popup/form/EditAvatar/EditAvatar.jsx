//EditAvatar.jsx

export default function EditAvatar() {
  return (
    <form
      className="form id-image-change-form"
      id="form-avatar-change"
      noValidate
    >
      {/* <h2 className="form__title id-image-change-form__title">
        Cambiar foto de perfil
      </h2> */}
      <fieldset className="form__fieldset">
        <label htmlFor="url">Url del Avatar</label>
        <input
          type="url"
          className="form__input form__url id-image-change-form__input"
          id="url"
          name="avatar"
          placeholder="Enlace a la imagen del nuevo avatar"
          required
        />

        <span className="url-input-error form__input-error"></span>

        <button
          type="submit"
          className="form__submit id-image-change-form__submit"
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
