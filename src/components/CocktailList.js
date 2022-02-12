import React from 'react'
import { useGlobalContext } from '../context'
import SingleCocktail from '../pages/SingleCocktail'

import Loading from './Loading'

const CocktailList = () => {

  const {cocktails, loading} = useGlobalContext()

  // console.log(cocktails.length);

  if(loading) return <Loading/>

  if(cocktails === null){
    return(
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>  
    )
  }

  return (
    <section className='section'>
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
          {
          cocktails.map( cocktail => {
            return  <SingleCocktail key={cocktail.idDrink} {...cocktail}/>
          })
          } 
      </div>
    </section>
  )
}

export default CocktailList