function Main(props) {

  function handleEditAvatarClick() {
    const editAvatarButton = document.querySelector('.profile__avatar-edit');
    const editAvatarModal = document.querySelector('.modal_type_avatar');

    editAvatarButton.addEventListener('click', () => {
      editAvatarModal.classList.add('modal_is-open');
    })
  }

  function handleEditProfileClick() {
    const editProfileButton = document.querySelector('.profile__edit-button');
    const editProfileModal = document.querySelector('.modal_type_edit-profile')

    editProfileButton.addEventListener('click', () => {
      editProfileModal.classList.add('modal_is-open');
    })
  }

  function handleAddPlaceClick() {
    const addCardButton = document.querySelector('.profile__add-button');
    const addCardModal = document.querySelector('.modal_type_add-card');

    addCardButton.addEventListener('click', () => {
      addCardModal.classList.add('modal_is-open');
    })
  }

  return (

    <main>
          <section className="profile">
            <button className="profile__avatar-edit" onClick={handleEditAvatarClick}>
              <img className="profile__avatar" src="#" alt=""/>
            </button>
            <div className="profile__info">
              <h1 className="profile__text">Costeau</h1>
              <button className="profile__edit-button" onClick={handleEditProfileClick} aria-label="Edit Avatar" type="button"></button>
              <p className="profile__paragraph">Explorer</p>
            </div>
            <button className="profile__add-button" onClick={handleAddPlaceClick} aria-label="Add button" type="button"></button>
          </section>

          <section className="elements">
            <ul className="elements__list"></ul>
          </section>
        </main>
  )
}

export default Main;