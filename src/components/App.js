import {useState, useEffect} from 'react';
import logo from '../images/header__logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import ImagePopup from './ImagePopup';

function App() {

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

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
  }



  return (
    <div className="page">

      <div className="page__container">

        <Header 
        logo={logo} 
        />

        <Main 
        onEditAvatar = {handleEditAvatarClick}
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        />

        <Footer 
        
        />
      </div>

      <PopupWithForm 
        modalName='edit_profile' 
        formType='type_profile' 
        modalTitle='Edit Profile' 
        submitText='Save' 
        isOpen = {isProfilePopupOpen}
        onEditProfile={handleEditProfileClick}
        onClose = {closeAllPopups}>
          <Input
            type='text'
            placeholder="Name"
            inputType='type_name'
            name='nameInput'
            min='2'
            max='40'
            id='profile-name-error'
          />
          <Input
            type='text'
            placeholder="About me"
            inputType='type_about'
            name='aboutInput'
            min='2'
            max='200'
            id='profile-about-error'
          />
        </PopupWithForm>


      <PopupWithForm 
        modalName='type_avatar' 
        formType='type_avatar' 
        modalTitle='Change Profile Picture' 
        submitText='Save' 
        isOpen = {isAvatarPopupOpen}
        onEditAvatar={handleEditAvatarClick}
        onClose = {closeAllPopups}>
          <Input
            type='url'
            placeholder="Image Link"
            inputType='type_avatar'
            name='avatar'
            id='avatar-url-error'
          />
      </PopupWithForm>


      <PopupWithForm 
        modalName='type_add-card' 
        formType='type_profile' 
        modalTitle='New Place' 
        submitText='Create' 
        isOpen = {isDeletePopupOpen}
        onAddPlace={handleAddPlaceClick}
        onClose = {closeAllPopups}>
          <Input
            type='text'
            placeholder="Title"
            inputType='card-title'
            name='title'
            id='card-title-error'
          />
          <Input
            type='url'
            placeholder="Image Link"
            inputType='card-url'
            name='url'
            id='card-url-error'
          />
      </PopupWithForm>
      

      <PopupWithForm 
        modalName='type_delete-card' 
        formType='type_profile' 
        modalTitle='Are you sure?' 
        submitText='Yes'
        onClose = {closeAllPopups}>
      </PopupWithForm>

      {/* <div className="modal modal_type_add-card">
        <form action="#" className="form form_type_card" name="CardForm">
          <h3 className="form__title">New Place</h3>

          <input id="card-title" type="text" placeholder="Title" className="form__input form__input_type_card-title" name="title" minLength="2" maxLength="30" required/>
          <span id="card-title-error" className="form__error"></span>

          <input id="card-url" type="url" placeholder="Image link" className="form__input form__input_type_card-url" name="url" required/>
          <span id="card-url-error" className="form__error"></span>

          <button disabled className="form__button form__button_type_create form__button_disabled" type="submit">Create</button>
          <button className="form__close-button" aria-label="Close button" type="reset"></button>
        </form>
      </div>

      <div className="modal modal_type_delete-card">
        <form action="#" className="form form_type_card-delete" name="deleteCard">
          <h3 className="form__title">Are you sure?</h3>
          <button className="form__button form__button_type_create" type="submit">Yes</button>
          <button className="form__close-button" aria-label="Close button" type="reset"></button>
        </form>
      </div> */}

      <ImagePopup/>

      <template id="card-template" className="card-template">
        <li className="card">
          <button className="card__delete-button" aria-label="Delete button" type="button"></button>
          <img className="card__image"/>
            <div className="card__group">
              <h2 className="card__text"></h2> 
                <div className="card__like-container">
                  <button className="card__like-button" aria-label="Like button" type="button"></button>
                  <p className="card__like-button-count"></p>
                </div>
            </div>
        </li>
      </template>

    </div>
  );
}

export default App;
