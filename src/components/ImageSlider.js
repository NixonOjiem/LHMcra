import { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="slider-container">
      <div className="slider">
        <div 
          className="slides-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        <button className="arrow prev" onClick={goToPrevious}>&#10094;</button>
        <button className="arrow next" onClick={goToNext}>&#10095;</button>
        
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;