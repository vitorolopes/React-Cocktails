import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({strDrinkThumb, strDrink, strAlcoholic, strGlass, idDrink}) => {
  return (
    <div className='cocktail'>
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <button className='btn btn-primary'>
          <Link to={`/cocktail/${idDrink}`}>
            details
          </Link>
        </button>
      </div>
      
    </div>
  )
}

export default Cocktail