import PopupWithForm from './PopupWithForm';
import {useState} from 'react';

function DeleteCardPopup(props) {

  const [card, setCard] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    props.onDeleteCard({ card });
    props.setSubmitStatus(true);
    // setCard();
  } 


  return(
    <PopupWithForm 
        modalName = 'type_delete-card' 
        formType = 'type_profile' 
        formTitle = 'Are you sure?' 
        submitText = { props.submitStatus ? 'Deleting...' : 'Yes' } 
        isOpen = {props.isOpen} 
        onClose = {props.onClose}
        onSubmit = {handleSubmit}
        />
  )
}
export default DeleteCardPopup;