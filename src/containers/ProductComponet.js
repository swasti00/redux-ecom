import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product
        return(
            <div className="four wide column" key={id}>
            <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div >
                            <img className="img" src={image} alt={title} />
                        </div>
                            
                        {/* </div> */}
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta">${price}</div>
                            <div className="category">{category}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
            );
    });
    return (
        <>
            {renderList}
        </>        
    )
};

export default ProductComponent;