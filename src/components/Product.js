export default function Product({product, onSelectProduct}) {
    return (
        <div className="single-product">
            <div className="product-name">
                Product: {product.name}
            </div>
            <div className="product-name">
                Manufacturer: {product.brand}
            </div>
            <div className="product-name">
                Model: {product.model}
            </div>
            <div className="product-name">
                Price: {product.price}
            </div>
            <div className="add-button" onClick={onSelectProduct}>
                Add to Cart
            </div>
        </div>
    );
}