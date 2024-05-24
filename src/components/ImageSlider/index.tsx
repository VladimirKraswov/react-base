import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';

import { setCurrentSlide } from '../../store/sliderSlice';
import { RootState } from '../../store';



interface ImageSliderProps {
  images: any[];
  onChangeColor?: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, onChangeColor }) => {
  console.log('Render: ImageSlider');
  const dispatch = useDispatch();
  
  const currentIndex = useSelector((state: RootState) => state.slider.currentSlide);

  const handleNext = () => {
    dispatch(setCurrentSlide((currentIndex + 1) % images.length));
  };

  const handlePrev = () => {
    dispatch(setCurrentSlide((currentIndex - 1 + images.length) % images.length));
  };

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