import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/actions/productAction";

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { productId } = useParams();
    const {image , category , title , price , description} = product
    
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
                console.log(err)
            });
    
        dispatch(selectedProducts(response.data));
        };
        if (productId && productId !== "") fetchProducts();
    },[productId , dispatch])
    return (
        <div className="ui grid container">
            
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={title} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2 className="ui teal tag label">${price}</h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
};

export default ProductDetail;