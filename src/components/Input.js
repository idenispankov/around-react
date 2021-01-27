export default function Input({type, placeholder, inputType, name, min, max, errorType}) {
  return (
    <>
    <input type = {type} placeholder = {placeholder} className = {`form__input form__input_${inputType}`} name = {name} minLength = {min} maxLength = {max} required/>

    <span id = {errorType} className = "form__error"></span>
    </>
  )
}