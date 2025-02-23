import React from 'react'
import './style.css'

const SaveButton = ({drinkId, drinkName, drinkImage, instructions}) => {
  let username = localStorage.getItem('username')
  
  const handleSubmitDrink = async (e) => {
    e.preventDefault()
    const options = {
        method: 'POST',
        body: JSON.stringify({id_drink: drinkId, username: username, drink_name: drinkName, drink_image: drinkImage, drink_instructions: instructions}),
        headers: {'Content-Type': 'application/json'}, withCredentials: true
    }
    await fetch(`http://localhost:8000/drinks/${username}/`, options)
    
}
  
  
  return (
    <button className='saveB' onClick={handleSubmitDrink}>Save Drink</button>
  )
}

export default SaveButton;
