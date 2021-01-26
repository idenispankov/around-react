export default function Card({card}) {


  return (
    <li className="card" key = {card._id}>
      <button className="card__delete-button" aria-label="Delete button" type="button"/>
      <img className="card__image" alt={card.name} src = {card.link}/>
        <div className="card__group">
          <h2 className="card__text">{card.name}</h2> 
            <div className="card__like-container">
              <button className="card__like-button" aria-label="Like button" type="button"/>
              <p className="card__like-button-count">{card.likes.length}</p>
            </div>
        </div>
    </li>
  )
}