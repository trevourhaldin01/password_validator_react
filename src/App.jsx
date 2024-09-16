import React, { useState } from "react"; 
import validator from 'validator'
import './App.css'

const App = () => { 

	const [errorMessage, setErrorMessage] = useState('') 
  const [strong, setStrong] = useState(false)

	const validate = (value) => { 

		if (validator.isStrongPassword(value, { 
			minLength: 8, minLowercase: 1, 
			minUppercase: 1, minNumbers: 1, minSymbols: 1 
		})) { 
			setErrorMessage('Strong Password') 
      setStrong(true)
		} else { 
			setErrorMessage('Weak Password') 
      setStrong(false)
		} 
	} 

	return ( 
		<div className="container"> 
			
				<h2>Checking Password Strength in ReactJS</h2> 
				
        <input type="text" placeholder="Password..." className="password-input"
					onChange={(e) => validate(e.target.value)}></input>  
				{errorMessage === '' ? null : 
					<span style={{ 
						fontWeight: 'bold', 
						color: strong ? 'green': 'red' , 
					}}>{errorMessage}</span>} 
			 
		</div> 
	); 
} 

export default App
