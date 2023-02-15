import React from 'react';
import "../assets/css/footer.scss";
import {Button, IconButton} from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    let tagTitle = ["Shoe", "Dress", "Shirt", "Pants", "Hat", "Gloves", "Socks", "Scarf", "Jacket"]
    return (
        <footer className="F-container">
            <div className="F-nav-container">
                <div className="F-about-container">
                    <h5>ABOUT</h5>
                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolor doloremque facilis
                        minus
                        modi
                        nostrum nulla porro, repudiandae sequi similique.</small>
                    <div>
                        <IconButton color="primary" aria-label="delete" size="small">
                            <MailOutlineIcon fontSize="inherit"/>
                        </IconButton>
                        <IconButton color="primary" aria-label="delete" size="small">
                            <TwitterIcon fontSize="inherit"/>
                        </IconButton>
                        <IconButton color="primary" aria-label="delete" size="small">
                            <WhatsAppIcon fontSize="inherit"/>
                        </IconButton>
                        <IconButton color="primary" aria-label="delete" size="small">
                            <InstagramIcon fontSize="inherit"/>
                        </IconButton>
                    </div>
                </div>
                <div className="F-category-container">
                    <h5>CATEGORY</h5>
                    <div className="F-category-tags-container">
                        {
                            tagTitle.map((tag, index) => <a key={index} href={`/${tag}`}
                                                            className="F-category-tag">{tag}</a>)
                        }
                    </div>
                </div>
                <div className="F-contactus-container">
                    <h5>CONTACT US</h5>
                    <form>
                        <input type="email" placeholder="Email"/>
                        <textarea placeholder="Message" rows="3"/>
                        <Button variant="outlined" size="small">submit</Button>
                    </form>
                </div>
            </div>
            <div className="F-copyright-container">
                <CopyrightIcon className="F-copyright-icon"/>
                <small>copyright 2024 All Rights Reserved
                    by Nobaan.</small>
            </div>
        </footer>
    );
};

export default Footer;