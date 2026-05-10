import React, { useState } from 'react';

const ImageWithSkeleton = ({ src, alt, className = "", imageClassName = "object-cover", skeletonClassName = "", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton Placeholder */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-300 animate-pulse rounded-md ${skeletonClassName}`} 
        />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-500 ${imageClassName} ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
