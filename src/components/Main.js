import {useState, useEffect} from 'react';
import api from '../utils/api';

export default function Main(props) {
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = ([]);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(err))
  })

  useEffect(() => {
    api.getCardList()
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
  })



  return (

    <main>
          <section className="profile">
            <button className="profile__avatar-edit" onClick={props.onEditAvatar}>
              <img className="profile__avatar" src={userAvatar} alt="profile image"/>
            </button>
            <div className="profile__info">
              <h1 className="profile__text">{userName}</h1>
              <button className="profile__edit-button" onClick={props.onEditProfile} aria-label="Edit Avatar" type="button"></button>
              <p className="profile__paragraph">{userDescription}</p>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace} aria-label="Add button" type="button"></button>
          </section>

          <section className="elements">
            <ul className="elements__list">
              <li class="card">
                <button class="card__delete-button" aria-label="Delete button" type="button"/>
                <img class="card__image"/>
                <div class="card__group">
                  <h2 class="card__text"></h2> 
                  <div class="card__like-container">
                  <button class="card__like-button" aria-label="Like button" type="button"/>
                  <p class="card__like-button-count">1</p>
                </div>
                </div>
            </li>
            </ul>
          </section>
        </main>
  )
}