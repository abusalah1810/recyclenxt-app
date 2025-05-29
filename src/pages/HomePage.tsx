import React, { useState } from 'react';
import { banners, products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  // Filter products based on selected category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  // Change banner every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">RecycleNXT</h1>
        <div className="profile-icon">👤</div>
      </div>
      
      <div className="banner-container">
        <Banner 
          title={banners[currentBannerIndex].title}
          content={banners[currentBannerIndex].content}
          backgroundColor={banners[currentBannerIndex].backgroundColor}
        />
      </div>
      
      <h2 className="section-title">Shop Eco-Friendly</h2>
      
      <div className="category-filters">
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
