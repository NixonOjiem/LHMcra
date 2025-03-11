import React from 'react';
import NavigationBar from '../components/NavigationBar';
// import './ProductPage.css';

function ProductPage() {
  // Static product data
  const product = {
    title: "Wireless Bluetooth Headphones",
    price: 149.99,
    rating: 4,
    description: "High-quality wireless headphones with premium sound quality and comfortable design.",
    features: [
      "20-hour Battery Life",
      "Bluetooth 5.0",
      "Noise Isolation",
      "Built-in Microphone"
    ],
    image: "",
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div>
      <NavigationBar />
      <div className="product-page">
      <div className="product-container">
        <div className="image-section">
          <img src='/assets/imageone.png' className="main-image"
          />
        </div>

        <div className="details-section">
          <h1>{product.title}</h1>
          <div className="rating">{renderStars(product.rating)}</div>
          <div className="price">${product.price}</div>
          
          <div className="features">
            <h3>Product Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>

          <div className="shipping-info">
            <p>Free shipping available</p>
            <p>Estimated delivery: 3-5 business days</p>
          </div>
        </div>
      </div>

      <div className="description-section">
        <h2>Product Description</h2>
        <p>{product.description}</p>
      </div>
    </div>
    </div>
    
  );
}

export default ProductPage;