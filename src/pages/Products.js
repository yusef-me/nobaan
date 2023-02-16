import React from 'react';
import "../assets/css/products.scss";
import {IconButton, Rating} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import productsData from "../data/products"

const Products = () => {
    const {Data} = productsData;
    return (
        <div className="P-container">
            {
                Data.map((product, index) =>
                    <div className="P-card" key={index} title={product.title}>
                        <div className="P-card-head">
                            <img className="p-card-image" src={product.img} alt={product.title}/>
                            <div className="P-card-action-container">
                                <IconButton color="primary" aria-label="delete" size="small" title="share">
                                    <ShareIcon fontSize="inherit"/>
                                </IconButton>
                                <IconButton color="primary" aria-label="delete" size="small" title="save">
                                    <TurnedInNotIcon fontSize="inherit"/>
                                </IconButton>
                                <IconButton color="primary" aria-label="delete" size="small" title="add to cart">
                                    <AddShoppingCartIcon fontSize="inherit"/>
                                </IconButton>
                            </div>
                        </div>
                        <div className="P-card-body">
                            <h2>{product.title}</h2>
                            <small>{product.subTitle}</small>
                            <Rating name="size-small" defaultValue={product.rating} size="small"/>
                            <span className="P-card-price">USD<b>{product.price}</b></span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Products;