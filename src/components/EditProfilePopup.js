import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { CurrentUserContext } from '../context/CurrentUserContext';
import {useState, useEffect, useContext} from 'react';

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser= useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
 
  function handleChange(e) {
    setName(e.target.name)
    setDescription(e.target.description)
  }

  useEffect(() => { 
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 


  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (

    <PopupWithForm 
        modalName = 'edit_profile' 
        formType = 'type_profile' 
        formTitle = 'Edit profile'
        submitText = 'Save' 
        isOpen = {isOpen}
        onClose = {onClose}
        onSubmit = {handleSubmit}
        >
          <Input
            type = 'text'
            placeholder = "Name"
            inputType = 'type_name'
            min = '2'
            max = '40'
            id = 'profile-name-error'
            onChange = {handleChange}
          />
          <Input
            type = 'text'
            placeholder = "About me"
            inputType = 'type_about'
            min = '2'
            max = '200'
            id = 'profile-about-error'
            onChange = {handleChange}
          />
        </PopupWithForm>
  )
}