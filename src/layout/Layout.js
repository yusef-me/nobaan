import React, {useState} from 'react';
import "../assets/css/layout.scss";
import Header from "./Header";
import Footer from "./Footer";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Register from "../pages/Register";
import {GlobalContext} from "../store/Context";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Layout = () => {
    const [isValidation, setIsValidation] = useState({
        errText: null,
        validation: null,
        phoneNum: null,
        GoToVerification: false
    })

    return (
        <>
            <GlobalContext.Provider
                value={{isValidation, setIsValidation}}>
                <BrowserRouter>
                    {window.location.pathname !== '/register' && <Header/>}
                    <Switch>
                        <Route exact path={`/`} component={Products}/>
                        <Route path={`/users`} component={Users}/>
                        <Route path={`/register`} component={Register}/>
                    </Switch>
                    {window.location.pathname !== '/register' && <Footer/>}
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
};

export default Layout;