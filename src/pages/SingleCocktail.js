import React from 'react'

const SingleCocktail = ({strDrinkThumb, strDrink, strAlcoholic, strGlass}) => {
  return (
    <div className='cocktail'>
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <button className='btn btn-primary'>details</button>
      </div>
      
    </div>
  )
}

export default SingleCocktail