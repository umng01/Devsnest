import React, {useState} from 'react';
import { useContext } from 'react/cjs/react.development';
import { MovieContext } from './MovieContext';
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className="nav">
        <ul>
            <li>Home</li>
            <li>Movies Mania</li>
            <li>Total movies watched: {movies.length}</li>
            <li>About</li>
        </ul>
        </div>
    );
}
export default Nav;