import React from 'react';

interface IntegrationLogoProps {
  name: string;
  imageUrl: string;
}

const IntegrationLogo: React.FC<IntegrationLogoProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img 
        src={imageUrl} 
        alt={`${name} logo`} 
        className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300"
      />
    </div>
  );
};

export default IntegrationLogo;