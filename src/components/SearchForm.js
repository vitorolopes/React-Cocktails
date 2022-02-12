import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {searchTerm, setSearchTerm} = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value);
  }

  return (
    <section className='section search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your cocktail</label>
          <input type="text"
                 value={searchTerm}
                 onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm