export default function Input(props) {
  return (
    <>
    <input 
      type = {props.type} 
      placeholder = {props.placeholder} 
      className = {`form__input form__input_${props.inputType}`} 
      name = {props.name} 
      minLength = {props.min} 
      maxLength = {props.max} 
      onChange = {props.handleChange}
      required/>

    <span 
      id = {props.errorType} 
      className = "form__error">
    </span>

    </>
  )
}