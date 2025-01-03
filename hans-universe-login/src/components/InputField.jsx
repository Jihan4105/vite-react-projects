import PropTypes from "prop-types"
import { useState } from "react"

export default function InputField({ state, setState, placeholder, iconName }) {
  const inputID = "login-" + state
  
  return (
    <div className="input-box">
      <label htmlFor={inputID}><ion-icon name={iconName} /></label>
      <input 
        type={ state === "password" ? "password" : "text"}
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
  state: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}