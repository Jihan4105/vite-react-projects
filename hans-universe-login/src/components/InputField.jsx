import PropTypes from "prop-types"

export default function InputField({ type, state, setState, placeholder, iconName }) {
  const inputID = "login-" + type
  
  return (
    <div className="input-box">
      <label htmlFor={inputID}><ion-icon name={iconName} /></label>
      <input 
        type={ type === "password" ? "password" : "text"}
        id={inputID} 
        name={inputID} 
        placeholder={placeholder}
        spellCheck="false"
        value={state}
        onChange={(e) => {setState(e.target.value)}}
      />
    </div>
  )
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}