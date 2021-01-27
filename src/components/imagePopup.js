export default function imagePopup(props) {
  return (
    <div className={`modal modal_type_image ${props.card ? 'modal_is-open' : null}`}>
        <figure className="modal__figure">
          <button className="form__close-button form__close-button_type-image" onClick={props.onClose} aria-label="Close button" type="button"></button>
          <img className="modal__image" src={props.link} alt={props.name}/>
          <figcaption className="modal__image-title">{props.name}</figcaption>
        </figure>
      </div>
  )
}