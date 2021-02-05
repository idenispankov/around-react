import {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext } from 'react';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if(!currentUser) return;
    api.getCardList()
      .then(setCards)
      .catch(err => console.log(err))
  }, [currentUser]);


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


  return (

    <main>
          <section className = "profile">
            <button className = "profile__avatar-edit" onClick = {onEditAvatar}>
              <img className = "profile__avatar" src = {currentUser.avatar} alt = "profile avatar"/>
            </button>
            <div className = "profile__info">
              <h1 className = "profile__text">{currentUser.name}</h1>
              <button className = "profile__edit-button" onClick = {onEditProfile} aria-label = "Edit Avatar" type = "button"></button>
              <p className = "profile__paragraph">{currentUser.about}</p>
            </div>
            <button className = "profile__add-button" onClick = {onAddPlace} aria-label = "Add button" type = "button"></button>
          </section>

          <section className = "elements">
            <ul className = "elements__list">
              {cards.map(card =>  (
              <Card
                card = {card}
                key = {card._id}
                currentUserId = {currentUser._id}
                onCardClick = {onCardClick}
                onCardLike = {handleCardLike}
                onCardDelete = {handleCardDelete}
              />
              ))}
            </ul>
          </section>
        </main>
  )
}