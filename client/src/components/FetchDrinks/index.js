import React, {useState, useEffect} from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const FetchApi = (url) => {
    const [data, setData] = useState([]);
    url = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php'
   // www.thecocktaildb.com/api/json/v2/9973533/lookup.php?iid=552

    const fetchDrinks = async () => {
        const response = await fetch(url)
        const result = await response.json()
        // console.log(result)
        setData(result.drinks)
    }

    useEffect(() => {
        fetchDrinks()
    }, [])

   

  return(
    data.map(drink => {

        const {idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic, strInstructions} = drink

        // Gather the ingredients for each drink
        const ingArray = Object.entries(drink)
       // console.log(ingArray)
        const ingFilter = ingArray.filter(x => x[0].includes('strIngredient') && x[1] !== null) 
        //console.log(ingFilter)

        // Gather the measures for each drink
        let measuresArray = Object.entries(drink)
        const mesFilter = measuresArray.filter(x => x[0].includes('strMeasure') && x[1] !== null)
            //console.log(mesFilter)

        return ( 
           <div className="drink-card">
               <Link to={`/drink-info/${idDrink}`}>         
                <div className="drink-img">
                    <h2>{strDrink}</h2>
                    <img src={strDrinkThumb} alt={strDrink} className="drink-thumb"/>
                </div>
                </Link>
            </div>
        )
    })
  )  
    
      
}

export default FetchApi
