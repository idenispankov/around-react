import PopupWithForm from './PopupWithForm';
import Input from './Input';
import {CurrentUserContext} from '../context/CurrentUserContext';
import {useContext, useState, useEffect} from 'react';

export default function EditProfilePopup(props) {

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')

  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }


  function handleAboutChange(e) {
    setAbout(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about
    });
  } 

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]); 

  

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
            name = 'profile'
            placeholder = "Name" 
            inputType = 'type_name' 
            min = '2' 
            max = '40' 
            id = 'profile-name-error' 
            handleChange = {handleNameChange}
            value = {name}
          /> 
          <Input 
            type = 'text' 
            name = 'about'
            placeholder = "About me" 
            inputType = 'type_about' 
            min = '2' 
            max = '200' 
            id = 'profile-about-error' 
            handleChange = {handleAboutChange}
            value = {about}
          /> 
        </PopupWithForm> 
  )
}