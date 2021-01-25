function Main(props) {

  return (

    <main>
          <section className="profile">
            <button className="profile__avatar-edit" onClick={props.onEditAvatar}>
              <img className="profile__avatar" src="#" alt=""/>
            </button>
            <div className="profile__info">
              <h1 className="profile__text">Costeau</h1>
              <button className="profile__edit-button" onClick={props.onEditProfile} aria-label="Edit Avatar" type="button"></button>
              <p className="profile__paragraph">Explorer</p>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace} aria-label="Add button" type="button"></button>
          </section>

          <section className="elements">
            <ul className="elements__list"></ul>
          </section>
        </main>
  )
}

export default Main;