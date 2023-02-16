import React from 'react';
import "../assets/css/page404.scss";
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div className="Err-container">
            <img className="Err-image" src="error404.svg" alt="error 404"/>
            <Link className="Err-link" to="/">Are you lost? click here to go to the home page</Link>
        </div>
    );
};

export default Page404;