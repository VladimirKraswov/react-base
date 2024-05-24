import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { ImageSlider, ImageSliderOld, Time, WebSlider } from './components';
import girlImageImports from './assets';
import { generateRandomColor } from './utils/generateColor';


function App() {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));
  const [color, setColor] = useState('#FFD700');

  const handleChangeColor = () => {
    const newColor = generateRandomColor();
    setColor(newColor);
  };

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000)
  }, [])

  return (
    <div style={styles.container}>
      <Time time={time} color={color}/>
      {/* <ImageSlider
        images={girlImageImports}
        onChangeColor={handleChangeColor}
      /> */}
      <WebSlider />
    </div>
  );
}

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default App;
