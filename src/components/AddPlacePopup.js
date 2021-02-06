import { useState } from 'react';

import PopupWithForm from './PopupWithForm';
import Input from './Input';



function AddPlacePopup(props) {

  const [name, setName] = useState('')
  const [link, setLink] = useState('')



  function handleChange(e) {
    setName(e.target.value);
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddCard({
      name: name,
      link: link,
    });
  } 



  return (
    <PopupWithForm 
        modalName = 'type_add-card' 
        formType = 'type_profile' 
        formTitle = 'New Place' 
        submitText = 'Create' 
        isOpen = {props.isOpen} 
        onClose = {props.onClose}
        onSubmit = {handleSubmit}
        >
          <Input
            type = 'text'
            placeholder = "Title"
            inputType = 'card-title'
            name = 'title'
            id = 'card-title-error'
            handleChange = {handleChange}
            value = {name}
          />
          <Input
            type = 'url'
            placeholder = "Image Link"
            inputType = 'card-url'
            name = 'url'
            id = 'card-url-error'
            handleChange = {handleChange}
            value = {link}
          />
      </PopupWithForm>
  );

}

export default AddPlacePopup;