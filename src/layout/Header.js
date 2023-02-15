import React, {useState} from 'react';
import "../assets/css/header.scss";
import {Link} from "react-router-dom";
import WindowIcon from '@mui/icons-material/Window';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import CallIcon from '@mui/icons-material/Call';
import {Box, Button, Drawer} from "@mui/material";

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <header className="H-container">
                <ul>
                    <li>
                        <Link className="H-nav-link" to="/">
                            <WindowIcon className="H-nav-icon"/>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/users">
                            <PeopleRoundedIcon className="H-nav-icon"/>
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="#">
                            <CallIcon className="H-nav-icon"/>
                            Contact Us
                        </Link>
                    </li>
                    <li className="H-drawer-btn">
                        <Button onClick={() => setOpenDrawer(true)}>
                            {openDrawer ? <ClearIcon/> : <MenuIcon/>}
                        </Button>
                    </li>
                    <li>
                        <Button style={{color: '#1976d2'}} href="/register" size="small" variant="outlined">Login /
                            Signup</Button>
                    </li>
                </ul>
                <Link to="/">
                    <img className="H-logo" src="logo192.png" alt="react logo"/>
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
                            <a className="H-nav-link" href="#">
                                <WindowIcon className="H-nav-icon"/>
                                Products
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">
                                <PeopleRoundedIcon className="H-nav-icon"/>
                                Users
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">
                                <CallIcon className="H-nav-icon"/>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;