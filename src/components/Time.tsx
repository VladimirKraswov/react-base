import React from 'react';

interface TimeProps {
  time: string;
  color: string;
}

const Time: React.FC<TimeProps> = ({ time, color }) => {

  console.log('Render Time');
  
  const style = getStyles(color);

  return (
    <h1 style={{...style.container, color}}>{time}</h1>
  );
};

const getStyles = (color: string) => ({
  container: {
    fontSize: 48,
    textShadow: `
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px ${color},
    0 0 82px${color},
    0 0 92px ${color},
    0 0 102px ${color},
    0 0 151px ${color}
  `

  },
  time: {
    
  }
})

export default Time;