import React, { useState } from 'react';
import Button from './Button';

interface ImageSliderProps {
  images: any[];
  onChangeColor?: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, onChangeColor }) => {
  console.log('Render: ImageSlider');
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // const container = React.createElement('div', { style: styles.container },
  //   React.createElement('img', { src: images[currentIndex], alt: 'Current img' }),
  //   React.createElement('div', { style: styles.buttonContainer },
  //     React.createElement(Button, { isLeft: true, onClick: handlePrev }),
  //     React.createElement('button', { style: styles.rndColorBtn, onClick: onChangeColor },
  //       React.createElement('h2', { style: styles.rndColorBtnText }, 'Random Color')
  //     ),
  //     React.createElement(Button, { onClick: handleNext })
  //   )
  // );

  // return container

  return (
    <div style={styles.container}>
      <img src={images[currentIndex]} alt="Current img" />
      <div style={styles.buttonContainer}>
      <Button isLeft onClick={handlePrev} />
      <button
        style={styles.rndColorBtn}
        onClick={onChangeColor}
      >
          <h2 style={styles.rndColorBtnText}>Random Color</h2>
      </button>
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
  rndColorBtn: {
    border: "3px solid #F2A42A",
    borderRadius: 20,
    padding: '5px 5px',
  },
  rndColorBtnText: {
    color: '#F2A42A'
  }
}

export default ImageSlider;