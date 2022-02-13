import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const base_Url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const details_Url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const CocktailDetails = () => {

    console.log(useParams());
    const {id} = useParams()

    const [identifier, setIdentifier] = useState(id)
    const [cocktailDetails, setCocktailDetails] = useState([])

    const url = `${details_Url}${id}`

    const {strDrink:name, strDrinkThumb:image, strAlcoholic: info,
           strCategory:category,strGlass:glass, strInstructions:instructions,
           strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = cocktailDetails

    const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]


    const fetchData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.drinks[0]);
        setCocktailDetails(data.drinks[0])
    }

    useEffect(() => {
    fetchData() 
    }, [id])

    return (
    <section className='section cocktail-section'>
        <Link className='btn btn-primary' to="/">back home</Link>
        <h2 className='section-title'>{name}</h2>
        <div className="drink">
            <img src={image} alt="" />
            <div className="drink-info">
              <p>
                <span className="drink-data">name:</span> {name}
              </p>
              <p>
                <span className="drink-data">category:</span> {category}
              </p>
              <p>
                <span className="drink-data">info:</span> {info}
              </p>
              <p>
                <span className="drink-data">instructions:</span> {instructions}
              </p>
              <p>
                <span className="drink-data">ingredients:</span> 
                  {ingredients.map((ingredient,index)=>{
                      return ingredient ? <span key={index}>{ingredient}</span> : null
                  })}
              </p>
            </div>
        </div>
    </section>
    )
}

export default CocktailDetails