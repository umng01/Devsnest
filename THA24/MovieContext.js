import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'A CAlifornia Christmas',
            price:'$20',
            id:1
        },
        {
            name: 'TrollHunters',
            price:'$15',
            id:2
        },
        {
            name: 'The Last Summer',
            price:'$20',
            id:3
        },
        {
            name: 'Money Heist',
            price:'$25',
            id:4
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
        </MovieContext.Provider>

    );
}