import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

const PictureGalleryModal = ({ images = [], startAt = 0, viewMode = 'carousel', onImageClick, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startAt);
  const [localViewMode, setLocalViewMode] = useState(viewMode);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Update currentIndex when startAt prop changes
  useEffect(() => {
    setCurrentIndex(startAt);
    setImageLoaded(false);
  }, [startAt]);

  // Update local view mode when viewMode prop changes
  useEffect(() => {
    setLocalViewMode(viewMode);
  }, [viewMode]);
  
  const imagesToDisplay = images && images.length > 0 ? images : ["/picture.png"];
  
  const handleImageClick = (idx) => {
    setCurrentIndex(idx);
    setLocalViewMode('carousel');
    setImageLoaded(false);
    if (onImageClick) {
      onImageClick(idx);
    }
  };

  const handleImageLoad = (e) => {
    const img = e.target;
    setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    setImageLoaded(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesToDisplay.length);
    setImageLoaded(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imagesToDisplay.length) % imagesToDisplay.length);
    setImageLoaded(false);
  };

  if (localViewMode === 'grid') {
    return (
      <div className="w-full max-h-screen overflow-y-auto p-4 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagesToDisplay.map((image, idx) => (
            <div
              key={idx}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
              onClick={() => handleImageClick(idx)}
            >
              <img
                src={image}
                alt={`Fotoğraf ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity">
                  Aç
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Carousel mode - responsive modal with actual image dimensions
  const isPortrait = imageDimensions.height > imageDimensions.width;
  const isLandscape = imageDimensions.width > imageDimensions.height;
  
  // Calculate max dimensions based on viewport
  const maxWidth = window.innerWidth * 0.9;
  const maxHeight = window.innerHeight * 0.85;
  
  let modalWidth = maxWidth;
  let modalHeight = maxHeight;
  
  // Adjust based on actual image dimensions
  if (imageLoaded && imageDimensions.width && imageDimensions.height) {
    const aspectRatio = imageDimensions.width / imageDimensions.height;
    
    if (isPortrait) {
      // Portrait: fit height, adjust width
      modalHeight = Math.min(maxHeight, window.innerHeight * 0.8);
      modalWidth = Math.min(modalHeight * aspectRatio, maxWidth);
    } else if (isLandscape) {
      // Landscape: fit width, adjust height
      modalWidth = Math.min(maxWidth, window.innerWidth * 0.85);
      modalHeight = Math.min(modalWidth / aspectRatio, maxHeight);
    } else {
      // Square
      const size = Math.min(maxWidth, maxHeight, 600);
      modalWidth = size;
      modalHeight = size;
    }
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-2 md:p-4">
      <div 
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{ width: `${modalWidth}px`, height: `${modalHeight}px` }}
      >
        {/* Image */}
        <img 
          src={imagesToDisplay[currentIndex]}
          alt={`Fotoğraf ${currentIndex + 1}`}
          onLoad={handleImageLoad}
          className="w-full h-full object-contain"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all z-10"
        >
          <FaChevronLeft size={20} />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all z-10"
        >
          <FaChevronRight size={20} />
        </button>
        
        {/* Image Counter */}
        <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {currentIndex + 1} / {imagesToDisplay.length}
        </div>
        
        {/* Close Button */}
        <button
          onClick={() => {
            if (onClose) onClose();
          }}
          className="absolute top-2 md:top-4 right-2 md:right-4 bg-primary hover:bg-primary/90 text-white p-2 md:p-3 rounded-full transition-all z-10"
          title="Kapat"
        >
          <FaXmark size={20} />
        </button>
      </div>
    </div>
  );
};

export default PictureGalleryModal;
