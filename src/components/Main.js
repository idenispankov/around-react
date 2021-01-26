import {useState, useEffect} from 'react';
import api from '../utils/api';
import avatarDefault from '../images/avatar_type_dark.jpg'

export default function Main(props) {
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
      .then((cards) => {
        console.log(cards)
      })
      .catch(err => console.log(err))
  },[])



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
              <li className="card">
                <button className="card__delete-button" aria-label="Delete button" type="button"/>
                <img className="card__image"/>
                <div className="card__group">
                  <h2 className="card__text"></h2> 
                  <div className="card__like-container">
                  <button className="card__like-button" aria-label="Like button" type="button"/>
                  <p className="card__like-button-count">1</p>
                </div>
                </div>
            </li>
            </ul>
          </section>
        </main>
  )
}