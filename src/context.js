import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const base_Url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const details_Url = "lookup.php?i=11007"

const AppProvider = ({children}) => {

   const [searchTerm, setSearchTerm] = useState("");
   const [cocktails, setCocktails] = useState([])
   const [loading, setLoading] = useState(false)

   const fetchData = async () => {
    let url
    if(searchTerm === ""){
        url = `${base_Url}a`
    } else {
        url = `${base_Url}${searchTerm}`
    }
    
    setLoading(true)
    const res = await fetch(url);
    const data = await res.json()
    setCocktails(data.drinks)
    setLoading(false)
   }

   useEffect(() => {
    fetchData() 
   }, [searchTerm])
    
   return(
        <AppContext.Provider value={
                            { cocktails,
                              loading,
                              searchTerm,
                              setSearchTerm
                            }
        }>
            {children}
        </AppContext.Provider>
   ) 
} 

export const useGlobalContext = () => {
   return useContext(AppContext)     
}

export {AppContext, AppProvider}