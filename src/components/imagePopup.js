function imagePopup(props) {
  return (
    <div className="modal modal_type_image">
        <figure className="modal__figure">
          <button className="form__close-button form__close-button_type-image" aria-label="Close button" type="button"></button>
          <img className="modal__image" alt={props.title}/>
          <figcaption className="modal__image-title"></figcaption>
        </figure>
      </div>
  )
}

export default imagePopup;