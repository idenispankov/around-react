export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={props.logo} alt="Around US logo"/>
    </header>
  )
}