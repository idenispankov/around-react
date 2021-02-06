import PopupWithForm from './PopupWithForm';
import Input from './Input';
import {CurrentUserContext} from '../context/CurrentUserContext';
import {useContext, useState, useEffect} from 'react';

export default function EditProfilePopup(props) {

  const [name, setName] = useState({name: ''})
  const [description, setDescription] = useState({about: ''})

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleChange() {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }


  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  

  return (
    <PopupWithForm  
        modalName = 'edit_profile'  
        formType = 'type_profile'  
        formTitle = 'Edit profile' 
        submitText = 'Save'  
        isOpen = {props.isOpen} 
        onClose = {props.onClose}
        // onSubmit = {() => console.log('Submit function')}
        onSubmit = {handleSubmit}
        > 
          <Input 
            type = 'text' 
            name = {name}
            description = {description}
            placeholder = "Name" 
            inputType = 'type_name' 
            min = '2' 
            max = '40' 
            id = 'profile-name-error' 
            handleChange = {handleChange}
          /> 
          <Input 
            type = 'text' 
            name = {name}
            description = {description}
            placeholder = "About me" 
            inputType = 'type_about' 
            min = '2' 
            max = '200' 
            id = 'profile-about-error' 
            handleChange = {handleChange}
          /> 
        </PopupWithForm> 
  )
}