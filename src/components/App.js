import {useState} from 'react';
import logo from '../images/header__logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import imagePopup from './imagePopup';

function App() {

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    console.log('avatar click!!!')
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    console.log('profile click!!!')
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    console.log('Add Card click!!!')
    setIsDeletePopupOpen(true);
  }

  return (
    <body className="page">
      <div className="page__container">
        <Header logo={logo} />
        <Main />
        <Footer />
      </div>

      <PopupWithForm modalName='edit_profile' formType='type_profile' modalTitle='Edit Profile' submitText='Save' onEditProfile={handleEditProfileClick}/>
      <PopupWithForm modalName='type_avatar' formType='type_avatar' modalTitle='Change Profile Picture' submitText='Save' onEditAvatar={handleEditAvatarClick}/>
      <PopupWithForm modalName='type_add-card' formType='type_profile' modalTitle='New Place' submitText='Create' onAddPlace={handleAddPlaceClick}/>
      <PopupWithForm modalName='type_delete-card' formType='type_profile' modalTitle='Are you sure?' submitText='Yes'/>

      {/* <div className="modal modal_type_edit-profile">
        <form action="#" className="form form_type_profile">
          <h3 className="form__title">Edit Profile</h3>

          <input type="text" placeholder="Name" id="profile-name" className="form__input form__input_type_name" name="nameInput" minLength="2" maxLength="40" required/>
          <span id="profile-name-error" className="form__error"></span>

          <input type="text" placeholder="About me" id="profile-name" className="form__input form__input_type_about" name="aboutInput" minLength="2" maxLength="200" required/>
          <span id="profile-about-error" className="form__error"></span>

          <button className="form__button form__button_type_save" type="submit">Save</button>
          <button className="form__close-button" aria-label="Close button" type="button"></button>
        </form>
      </div>

      <div className="modal modal_type_avatar">
        <form action="#" className="form form_type_avatar" name="avatar">
          <h3 className="form__title">Change Profile Picture</h3>

          <input id="avatar-url" type="url" className="form__input form__input_type_avatar" name="avatar" aria-label="Image Link" placeholder="Image Link" required/>
          <span id="avatar-url-error" className="form__error"></span>

          <button disabled className="form__button form__button_type_save form__button_disabled" type="submit">Save</button>
          <button className="form__close-button" aria-label="Close button" type="reset"></button>
        </form>
      </div>

      <div className="modal modal_type_add-card">
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

      <imagePopup/>

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

    </body>
  );
}

export default App;
