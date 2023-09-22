import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { ImageSlider, ImageSliderOld, Time } from './components';
import girlImageImports from './assets';


function App() {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'))
    }, 1000)
  }, [])

  return (
    <div style={styles.container}>
      <Time time={time}/>
      <ImageSlider images={girlImageImports}/>
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
