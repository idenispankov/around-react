export default function PopupWithForm({modalName, isOpen, formType, formTitle, submitText, onClose, children}) {
  return(
    <div className = {`modal modal_type_${modalName} ${isOpen && 'modal_is-open'}`}>
        <form action = "#" className = {`form form_${formType}`}>
          <h3 className = "form__title">{formTitle}</h3>

          {children}

          <button className = "form__button form__button_type_save" type = "submit">{submitText}</button>
          <button className = "form__close-button" onClick = {onClose} aria-label = "Close button" type="reset"></button>
        </form>
      </div>
  )
}