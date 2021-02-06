import {useState, useEffect} from 'react';
import logo from '../images/header__logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
// import Input from './Input';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import avatar from '../images/avatar_type_dark.jpg';
import EditProfilePopup from '../components/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup';
import AddPlacePopup from '../components/AddPlacePopup';

export default function App() {

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  // const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, SetIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)

  const [currentUser, setCurrentUser]= useState({name: '', about: '', avatar: avatar});
  const [cards, setCards] = useState([]);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    SetIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(e) {
      setIsAvatarPopupOpen(false);
      setIsProfilePopupOpen(false);
      SetIsAddPlacePopupOpen(false);
      setSelectedCard(null); 
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  useEffect(() => {
    api.getUserInfo()
    .then((user) => {
      setCurrentUser(user);
    })
    .catch(err => console.log(err))
  }, []);


  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }


  function handleUpdateAvatar(avatarData) {
    api.setUserAvatar(avatarData)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
        console.log(user)
      })
      .catch(err => console.log(err))
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.updateLikes(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch(err => console.log(err))
} 

function handleCardDelete(card) {
  api.removeCard(card._id)
  .then(() => {
    const newCards = cards.filter((c) => c._id !== card._id);  
    setCards(newCards);
  })
  .catch(err => console.log(err))
}


function handleAddPlaceSubmit(cardData) {
  api.addCard(cardData)
  .then((newCard) => {
    console.log(newCard)
  })
  .catch(err => console.log(err))
}

useEffect(() => {
  if(!currentUser) return;
  api.getCardList()
    .then(setCards)
    .catch(err => console.log(err))
}, [currentUser]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (

    <CurrentUserContext.Provider value={currentUser}>

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
        card = {cards}
        onDeleteClick = {handleCardDelete}
        onLikeClick = {handleCardLike}
        />

        <Footer 
        footerText = '&copy; 2020 Around The U.S.'
        />
        
      </div>

      <EditProfilePopup isOpen={isProfilePopupOpen} onClose={closeAllPopups} onUpdateUser = {handleUpdateUser}/> 
      <EditAvatarPopup isOpen={isAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar = {handleUpdateAvatar}/> 
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard = {handleAddPlaceSubmit}/> 

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
    </CurrentUserContext.Provider>
  );
}
