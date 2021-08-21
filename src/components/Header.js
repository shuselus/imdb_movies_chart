import React from "react";
import { ReactComponent as MovieIcon } from '../svgs/movieIcon.svg'

const Header = () => {
    return (
        <div className="header-container shadow" >
            <MovieIcon />
            <h3>IMDb Chart - Top Rated Movies</h3>
        </div>
    )
}

export default Header
