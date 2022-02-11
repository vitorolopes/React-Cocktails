import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const base_Url = "https://www.thecocktaildb.com/api/json/v1/1/"
const search_Url = "search.php?f=a"
const details_Url = "lookup.php?i=11007"

const AppProvider = ({children}) => {

   const [searchTerm, setSearchTerm] = useState("");
   const [cocktails, setCocktails] = useState([])

   const fetchData = async () => {
    const res = await fetch(`${base_Url}${search_Url}`);
    const data = await res.json()
    console.log(data);
    setCocktails(data.drinks)
   }

   useEffect(() => {
    fetchData() 
   }, [])
    
    
    return(
        <AppContext.Provider value={
                            { cocktails }
        }>
            {children}
        </AppContext.Provider>
    ) 
} 

export const useGlobalContext = () => {
   return useContext(AppContext)     
}

export {AppContext, AppProvider}