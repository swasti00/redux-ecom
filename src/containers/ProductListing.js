import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css"
import ProductComponent from "./ProductComponet";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state);
   
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
                console.log(err);
            });
            dispatch(setProducts(response.data))
        }
        fetchProducts()
    },[dispatch]);
    console.log(products)
    return (
        <div id="listing" className="ui grid container">
            <ProductComponent />
        </div>
    )
};

export default ProductListing;