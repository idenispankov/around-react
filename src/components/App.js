import {useState, useEffect} from 'react';
import logo from '../images/header__logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
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
  const [isAddPlacePopupOpen, SetIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  

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
      })
      .catch(err => console.log(err))
  }


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
  api.addCard({name: cardData.name, link: cardData.link})
  .then((newCard) => {
    setCards([newCard, ...cards]);
    closeAllPopups();
  })
  .catch(err => console.log(err));
}

useEffect(() => {
  Promise.all([api.getUserInfo(),api.getCardList({})])
    .then(data => {
      const [user,cardsList] = data;
        setCurrentUser(user)
        setCards(cardsList)
    })
    .catch(err => console.log(err))
},[])

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
        cards = {cards}
        onDeleteClick = {handleCardDelete}
        onLikeClick = {handleCardLike}
        />

        <Footer 
        footerText = '&copy; 2020 Around The U.S.'
        />
        
      </div>

      <EditProfilePopup isOpen={isProfilePopupOpen} onClose={closeAllPopups} onUpdateUser = {handleUpdateUser}/> 
      <EditAvatarPopup isOpen={isAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar = {handleUpdateAvatar}/> 
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace = {handleAddPlaceSubmit}/> 

      <PopupWithForm 
        modalName = 'type_delete-card' 
        formType = 'type_profile' 
        modalTitle = 'Are you sure?' 
        submitText =  'Yes'
        onClose = {closeAllPopups}/>

      <ImagePopup onClose = {closeAllPopups} selectedCard = {selectedCard}/>

    </div>
    </CurrentUserContext.Provider>
  );
}
