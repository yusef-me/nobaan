import React, {useContext, useEffect} from 'react';
import {GlobalContext} from "../store/Context";

const NetworkConnection = () => {
    const {isOnline, setNetwork} = useContext(GlobalContext);
    const updateNetwork = () => {
        setNetwork(window.navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("offline", updateNetwork);

        window.addEventListener("online", updateNetwork);

        return () => {
            window.removeEventListener("offline", updateNetwork);

            window.removeEventListener("online", updateNetwork);
        };
    });

    return isOnline;
};

export default NetworkConnection;