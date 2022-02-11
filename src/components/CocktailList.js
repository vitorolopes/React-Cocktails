import React from 'react'
import { useGlobalContext } from '../context'
import SingleCocktail from '../pages/SingleCocktail'

const CocktailList = () => {

  const {cocktails} = useGlobalContext()

  return (
    <section className='section'>
      <h1 className="section-title">cocktails</h1>
      <div className="cocktails-center">
          {cocktails.map( cocktail => {
            return  <SingleCocktail key={cocktail.idDrink} {...cocktail}/>
          })}
      </div>
    </section>
  )
}

export default CocktailList