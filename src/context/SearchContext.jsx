import React, { useState, createContext } from 'react'

export const SearchContext = createContext({})

export default function SearchContextProvider({children}) {    
    
    const [searchHistory, setSearchHistory] = useState([])    
    const [searchResult, setSearchResult] = useState(null)
    return (   

        <SearchContext.Provider             
        value={{searchHistory, setSearchHistory, searchResult, setSearchResult}}        
        >            
        {children}

        </SearchContext.Provider>    
    )
    
}