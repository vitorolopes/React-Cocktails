import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from './Cocktail'

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
            return  <Cocktail key={cocktail.idDrink} {...cocktail}/>
          })
          } 
      </div>
    </section>
  )
}

export default CocktailList