import Product from "./Product";
import { productList } from "../product-list";
import { useState } from 'react';

export function ProductList({sum}) {

    const [totalPrice, updatePrice] = useState(sum);

    const onSelectProduct = (product) => {
        console.log(product);
        // sum += product.price;
        // this.state = {
        //     totalPrice: sum
        // };
        updatePrice(totalPrice + product.price);
    }
    
    return(
        <>
            <div>Total price is {totalPrice}</div>
            <div className="product-list-container">
                {productList.map((product) => {return (
                    <Product
                    product={product}
                    key={product.id}
                    onSelectProduct={() => onSelectProduct(product)}
                    >
                    </Product>)})}
            </div>
        </>
        
    );
}