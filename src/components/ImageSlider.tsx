import React, { useState } from 'react';
import Button from './Button';

interface ImageSliderProps {
  images: any[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div style={styles.container}>
      <img src={images[currentIndex]} alt="Current img" />
      <div style={styles.buttonContainer}>
      <Button isLeft onClick={handlePrev} />
      <Button onClick={handleNext} />
      </div>
    </div>
  );
};

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}

export default ImageSlider;