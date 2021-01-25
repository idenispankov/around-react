function PopupWithForm(props) {
  return(
    <div className={`modal modal_type_${props.modalName}`}>
        <form action="#" className={`form form_${props.formType}`}>
          <h3 className="form__title">{props.formTitle}</h3>

          <input type="text" placeholder="Name" id="profile-name" className="form__input form__input_type_name" name="nameInput" minLength="2" maxLength="40" required/>
          <span id="profile-name-error" className="form__error"></span>

          <input type="text" placeholder="About me" id="profile-name" className="form__input form__input_type_about" name="aboutInput" minLength="2" maxLength="200" required/>
          <span id="profile-about-error" className="form__error"></span>

          <button className="form__button form__button_type_save" type="submit">{props.submitText}</button>
          <button className="form__close-button" aria-label="Close button" type="button"></button>
        </form>
      </div>
  )
}

export default PopupWithForm;