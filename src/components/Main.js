import {useState, useEffect} from 'react';
import api from '../utils/api';
import avatarDefault from '../images/avatar_type_dark.jpg';
import Card from './Card';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(avatarDefault);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    api.getCardList()
      .then(setCards)
      .catch(err => console.log(err))
  },[])



  return (

    <main>
          <section className = "profile">
            <button className = "profile__avatar-edit" onClick = {onEditAvatar}>
              <img className = "profile__avatar" src = {userAvatar} alt = "profile avatar"/>
            </button>
            <div className = "profile__info">
              <h1 className = "profile__text">{userName}</h1>
              <button className = "profile__edit-button" onClick = {onEditProfile} aria-label = "Edit Avatar" type = "button"></button>
              <p className = "profile__paragraph">{userDescription}</p>
            </div>
            <button className = "profile__add-button" onClick = {onAddPlace} aria-label = "Add button" type = "button"></button>
          </section>

          <section className = "elements">
            <ul className = "elements__list">
              {cards.map(card =>  (
              <Card
                card = {card}
                key = {card._id}
                onCardClick = {onCardClick}
              />
              ))}
            </ul>
          </section>
        </main>
  )
}