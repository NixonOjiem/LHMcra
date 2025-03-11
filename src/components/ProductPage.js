import React, { useState } from 'react';

function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Sample product data
  const product = {
    title: "Wireless Bluetooth Headphones with Noise Cancellation",
    price: 199.99,
    rating: 4,
    reviews: 1256,
    description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality. Comfortable over-ear design with premium memory foam ear cushions.",
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Bluetooth 5.0",
      "Quick Charge (5 min = 2 hours playtime)",
      "Touch Controls"
    ],
    images: [
      "https://via.placeholder.com/600x600",
      "https://via.placeholder.com/600x600/cccccc",
      "https://via.placeholder.com/600x600/999999",
      "https://via.placeholder.com/600x600/666666"
    ],
    reviewsList: [
      { user: "JohnDoe", rating: 5, comment: "Amazing sound quality!" },
      { user: "JaneSmith", rating: 4, comment: "Good battery life, comfortable fit." },
      { user: "AudioFan", rating: 4, comment: "Great value for the price." }
    ]
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`w-20 h-20 cursor-pointer border-2 ${i === selectedImage ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelectedImage(i)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center gap-2 mb-4">
            {renderStars(product.rating)}
            <span className="text-blue-600">{product.reviews} ratings</span>
          </div>
          <hr className="my-4" />
          
          <div className="text-3xl font-bold mb-4">
            ${product.price}
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">About this item</h2>
            <ul className="list-disc pl-5">
              {product.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg font-bold">
              Add to Cart
            </button>
            <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 rounded-lg font-bold">
              Buy Now
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Add delivery protection from $3.99</span>
            </div>
            <p className="text-green-600">FREE delivery <b>Tomorrow</b> by 3 PM</p>
          </div>
        </div>
      </div>

      {/* Product Description & Reviews */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Product Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {product.reviewsList.map((review, i) => (
              <div key={i} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold">{review.user}</span>
                  {renderStars(review.rating)}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;