import React, { useState } from 'react';
import ButtonImage from '../../assets/button/button.png';
import ButtonActiveImage from '../../assets/button/button-active.png';

interface Props {
  isLeft?: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ isLeft, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button style={styles.container} onClick={onClick}>
      <img
        style={{
          ...styles.btn,
          transform: isLeft ? 'scale(-1, -1)' : '',
        }} 
        src={isActive ? ButtonActiveImage : ButtonImage}
        alt="Button"
        onMouseOver={() => setIsActive(true)}
        onMouseOut={() => setIsActive(false)} 
        />
    </button>
  );
};

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    backgroundColor: 'transparent',
  },
  btn: {
    transform: 'scale(-1, -1)',
    width: 64,
    height: 64,
  }
}

export default Button;