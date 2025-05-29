import React from 'react';

interface BannerProps {
  title: string;
  content: string;
  backgroundColor: string;
}

const Banner: React.FC<BannerProps> = ({ title, content, backgroundColor }) => {
  return (
    <div className="banner" style={{ backgroundColor }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Banner;
