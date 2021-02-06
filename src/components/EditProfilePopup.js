import PopupWithForm from './PopupWithForm';
import Input from './Input';
import {CurrentUserContext} from '../context/CurrentUserContext';
import {useContext, useState, useEffect} from 'react';

export default function EditProfilePopup(props) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState({name: ''})
  const [description, setDescription] = useState({about: ''})

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  function handleChange(e) {
    setName(e.currentUser.name)
    setDescription(e.currentUser.about);
  }


  return (
    <PopupWithForm  
        modalName = 'edit_profile'  
        formType = 'type_profile'  
        formTitle = 'Edit profile' 
        submitText = 'Save'  
        isOpen = {props.isOpen} 
        onClose = {props.onClose}
        onSubmit = {handleSubmit}
        > 
          <Input 
            type = 'text' 
            placeholder = "Name" 
            inputType = 'type_name' 
            name = {name}
            min = '2' 
            max = '40' 
            id = 'profile-name-error' 
            onChange = {handleChange}
          /> 
          <Input 
            type = 'text' 
            placeholder = "About me" 
            inputType = 'type_about' 
            name = 'aboutInput' 
            description = {description}
            min = '2' 
            max = '200' 
            id = 'profile-about-error' 
            onChange = {handleChange}
          /> 
        </PopupWithForm> 
  )
}