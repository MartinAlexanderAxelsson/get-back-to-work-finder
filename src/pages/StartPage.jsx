import React, { useState, useContext, useRef, useEffect } from 'react'
import JobList from '../components/JobList'
import {SearchContext} from '../context/SearchContext'
import '../Styles/StartPage.scss'

export default function StartPage() {

    const [completed, setCompleted] = useState(0);
    const {searchHistory, setSearchHistory} = useContext(SearchContext) 
    const {searchResult, setSearchResult} = useContext(SearchContext) 
    const [searchTerm, setSearchTerm] = useState('')
    const modifiedSearchTerm = searchTerm.replaceAll(" ", "+")
    const ref = useRef('')

    const fetchSearchedJobs = () => {
        const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${modifiedSearchTerm}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            
            setSearchResult({searchTerm: modifiedSearchTerm, results: data});
            setSearchHistory(prevState => [
            ...prevState,
            { searchTerm: modifiedSearchTerm, results: data }]);
        })  
    }

    function onSubmit(e) {
        
        e.preventDefault()
        const searchHistoryResults = searchHistory.find(e => e.searchTerm === modifiedSearchTerm)
        
        if (searchHistoryResults) {
            setSearchResult(searchHistoryResults);
        } else {
            fetchSearchedJobs(modifiedSearchTerm);
        }

        if (modifiedSearchTerm === '') {
            setSearchResult(null);
            return
        }
    }

    return (
        <>
        <main className="startpage">
        <h1 className="startpage__h1">Get Back To Work-Finder</h1>
        <form className="startpage__form" onSubmit={onSubmit}>
        <h3 className="startpage__form__h3">Search for available jobs:</h3>
        <input className="startpage__form__input" ref={ref} onChange={(e) => setSearchTerm(e.target.value)}></input>
        <button className="startpage__form__button" type="submit" >Search</button>
        </form>
   
        { searchResult && <JobList searchResult={searchResult.results}/> }
        
        </main>
        </>
    )
}
