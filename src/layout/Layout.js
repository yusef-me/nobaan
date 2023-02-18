import React, {useState, lazy, Suspense} from 'react';
import "../assets/css/layout.scss";
import Header from "./Header";
import Footer from "./Footer";
import {GlobalContext} from "../store/Context";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DisplayDialog from "../utils/DisplayDialog";
import {CircularProgress} from "@mui/material";
import NetworkConnection from "../utils/NetworkConnection";

const Products = lazy(() => import('../pages/Products'));
const Users = lazy(() => import('../pages/Users'));
const Register = lazy(() => import('../pages/Register'));
const Page404 = lazy(() => import('../pages/Page404'));

const Layout = () => {
    const [isValidation, setIsValidation] = useState({
        errText: null,
        validation: null,
        phoneNum: null,
        GoToVerification: false,
    });
    const [textFieldData, setTextFieldData] = useState(null);
    const [isOnline, setNetwork] = useState(window.navigator.onLine);

    return (
        <>
            <GlobalContext.Provider
                value={{isValidation, setIsValidation, textFieldData, setTextFieldData, isOnline, setNetwork}}>
                <DisplayDialog/>
                <NetworkConnection/>
                <BrowserRouter>
                    {window.location.pathname !== '/register' && <Header/>}
                    <Suspense fallback={
                        <div className="Sus-Progress-container">
                            <CircularProgress color="secondary"/>
                        </div>
                    }>
                        <Switch>
                            <Route exact path={`/`} component={Products}/>
                            <Route path={`/users`} component={Users}/>
                            <Route path={`/register`} component={Register}/>
                            <Route component={Page404}/>
                        </Switch>
                    </Suspense>
                    {window.location.pathname !== '/register' && <Footer/>}
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
};

export default Layout;