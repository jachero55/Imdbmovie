import React, { useState, useEffect, useContext, useCallback } from 'react'
// import API from '../API'

// The url where we are fetching the data from
const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=''`
// Create context
const AppContext = React.createContext();

// Create the Provider and pass in the children props
const AppProvider = ({ children }) => {
    // create variables for loading, search and movies
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState(('a'))
    const [movies, setMovies] = useState([])

    // Fetch the movies
    const fetchMovies = useCallback(async () => {
        // Set loading to true
        setLoading(true)
        // use try catch
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            console.log(data);
            // store the data in an object
            const { results } = data;
            // check if results has data
            if (results) {
                // If there is data, then map through the results and store the data in a variable
                const movieResults = results.map(item => {
                    // store the movie info in item
                    const { id, poster_path, original_language, original_title, overview, popularity, release_date, vote_count } = item;
                    return {
                        id, image: poster_path, language: original_language, title: original_title, overview, popularity, release_date, vote_count,

                    }
                })
                // set movieResults to setMovies
                setMovies(movieResults)
            } else {
                // set the setMovies to ([]) array
                setMovies([])
            }
            // Then set loading to false
            setLoading(false)
        } catch (error) {
            console.log(error)
            // set loading to false again here
            setLoading(false)
        }
        // The [searchTerm] here is the dependency being taken by a useCallback
        // The useCallback hook receives a function as a parameter, and also an array of dependencies. 
        // The useCallback hook will return a memoized version of the callback, 
        // and it’ll only be changed if one of the dependencies has changed.
    }, [searchTerm])

    // We are going to use useEffect
    useEffect(() => {
        // We are going to call the function fetchMovies here that we created above
        fetchMovies();
        // The useEffect will take two dependencies, [searchTerm, fetchMovies]
    }, [searchTerm, fetchMovies])

    return (
        // Return the AppContext inside the provider
        <AppContext.Provider
            // The provider is taking loading, movies and setSearchTerm
            value={{ loading, movies, setSearchTerm }}>
            {children}
        </AppContext.Provider>
    )
}
// export the variable useGlobalContext
export const useGlobalContext = () => {
    return useContext(AppContext)
}

// Export  AppContext, AppProvider
export { AppContext, AppProvider }

// DON'T FORGET TO IMPORT THIS FILE in index.jsx/js and wrap App in index
// width <AppProvider>APP</AppProvider>