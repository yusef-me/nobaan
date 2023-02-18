import React, {useContext, useState} from 'react';
import "../assets/css/header.scss";
import {Link} from "react-router-dom";
import WindowIcon from '@mui/icons-material/Window';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {Box, Button, Drawer} from "@mui/material";
import {GlobalContext} from "../store/Context";

const Header = () => {
    const {isOnline} = useContext(GlobalContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <header className="H-container">
                <ul>
                    <li className="H-li-none">
                        <Link className="H-nav-link" to="/">
                            <WindowIcon className="H-nav-icon"/>
                            Products
                        </Link>
                    </li>
                    <li className="H-li-none">
                        <Link className="nav-link" to="/users">
                            <PeopleRoundedIcon className="H-nav-icon"/>
                            Users
                        </Link>
                    </li>
                    {
                        localStorage.getItem('auth-token') &&
                        <li className="H-li-none" onClick={() => {
                            localStorage.clear()
                            window.location.reload(false)
                        }}>
                            <Link to="#">
                                <LogoutRoundedIcon className="H-nav-icon"/>
                                Log out
                            </Link>
                        </li>
                    }
                    <li className="H-drawer-btn">
                        <Button onClick={() => setOpenDrawer(true)}>
                            {openDrawer ? <ClearIcon/> : <MenuIcon/>}
                        </Button>
                    </li>
                    {
                        !localStorage.getItem('auth-token') &&
                        <li>
                            <Button style={{color: '#1976d2'}} href="/register" size="small" variant="outlined">Login /
                                Signup</Button>
                        </li>
                    }
                </ul>
                <Link to="/">
                    <span
                        title={`you are in ${isOnline ? 'online mode' : 'offline mode our some issue with connection'}`}
                        className="H-connection-mode">{isOnline ? 'online mode' : 'offline mode'}</span>
                    <img className="H-logo" src="nobaan logo.png" alt="react logo"/>
                </Link>
            </header>
            <Drawer
                anchor={'right'}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box
                    style={{'width': '200px'}}
                    role="presentation"
                    onClick={() => setOpenDrawer(false)}
                    onKeyDown={() => setOpenDrawer(false)}
                >
                    <ul className="H-drawer-navbar">
                        <li>
                            <Link to="/">
                                <WindowIcon/>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/users">
                                <PeopleRoundedIcon/>
                                Users
                            </Link>
                        </li>
                        {
                            localStorage.getItem('auth-token') &&
                            <li onClick={() => {
                                localStorage.clear()
                                window.location.reload(false)
                            }}>
                                <Link to="#">
                                    <LogoutRoundedIcon/>
                                    Log out
                                </Link>
                            </li>
                        }
                    </ul>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;