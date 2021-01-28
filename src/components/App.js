import {useState} from 'react';
import logo from '../images/header__logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import ImagePopup from './ImagePopup';

export default function App() {

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsDeletePopupOpen(true);
  }

  function closeAllPopups(e) {
      setIsAvatarPopupOpen(false);
      setIsProfilePopupOpen(false);
      setIsDeletePopupOpen(false);
      setSelectedCard(null); 
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }



  return (
    <div className = "page">

      <div className = "page__container">

        <Header 
        logo = {logo} 
        />

        <Main 
        onEditAvatar = {handleEditAvatarClick}
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
        />

        <Footer 
        footerText = '&copy; 2020 Around The U.S.'
        />
        
      </div>

      <PopupWithForm 
        modalName = 'edit_profile' 
        formType = 'type_profile' 
        formTitle = 'Edit profile'
        submitText = 'Save' 
        isOpen = {isProfilePopupOpen}
        onEditProfile = {handleEditProfileClick}
        onClose = {closeAllPopups}>
          <Input
            type = 'text'
            placeholder = "Name"
            inputType = 'type_name'
            name = 'nameInput'
            min = '2'
            max = '40'
            id = 'profile-name-error'
          />
          <Input
            type = 'text'
            placeholder = "About me"
            inputType = 'type_about'
            name = 'aboutInput'
            min = '2'
            max = '200'
            id = 'profile-about-error'
          />
        </PopupWithForm>


      <PopupWithForm 
        modalName = 'type_avatar' 
        formType = 'type_avatar' 
        formTitle = 'Change Profile Picture' 
        submitText = 'Save' 
        isOpen = {isAvatarPopupOpen}
        onEditAvatar = {handleEditAvatarClick}
        onClose = {closeAllPopups}>
          <Input
            type = 'url'
            placeholder = "Image Link"
            inputType = 'type_avatar'
            name = 'avatar'
            id = 'avatar-url-error'
          />
      </PopupWithForm>


      <PopupWithForm 
        modalName = 'type_add-card' 
        formType = 'type_profile' 
        formTitle = 'New Place' 
        submitText = 'Create' 
        isOpen = {isDeletePopupOpen}
        onAddPlace = {handleAddPlaceClick}
        onClose = {closeAllPopups}>
          <Input
            type = 'text'
            placeholder = "Title"
            inputType = 'card-title'
            name = 'title'
            id = 'card-title-error'
          />
          <Input
            type = 'url'
            placeholder = "Image Link"
            inputType = 'card-url'
            name = 'url'
            id = 'card-url-error'
          />
      </PopupWithForm>
      

      <PopupWithForm 
        modalName = 'type_delete-card' 
        formType = 'type_profile' 
        modalTitle = 'Are you sure?' 
        submitText =  'Yes'
        onClose = {closeAllPopups}>
      </PopupWithForm>

      <ImagePopup
        onClose = {closeAllPopups}
        selectedCard = {selectedCard}
      />

    </div>
  );
}
