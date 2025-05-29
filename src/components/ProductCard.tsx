import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
    // In a real app, this would dispatch an action to add the product to cart
  };

  const handleBuyNow = () => {
    console.log(`Buy now: ${product.name}`);
    // In a real app, this would navigate to checkout with this product
  };

  return (
    <div className="product-card card">
      <div className="product-image">
        {/* In a real app, this would be an actual image */}
        <div style={{ 
          height: '120px', 
          backgroundColor: 'var(--light-gray)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px'
        }}>
          {product.name.split(' ')[0]} Image
        </div>
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-price">₹{product.price}</div>
        <div className="product-actions">
          <button 
            className="btn-secondary" 
            style={{ 
              padding: '6px 12px', 
              fontSize: '12px',
              marginRight: '8px'
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button 
            className="btn-primary" 
            style={{ 
              padding: '6px 12px', 
              fontSize: '12px' 
            }}
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
