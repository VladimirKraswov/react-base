import React from 'react';

interface TimeProps {
  time: string;
}

const Time: React.FC<TimeProps> = ({ time }) => {

  return (
    <h1 style={styles.container}>{time}</h1>
  );
};

const styles: { [name: string]: React.CSSProperties }  = {
  container: {
    color: '#FFD700',
    fontSize: 48,
  },
  time: {
    
  }
}

export default Time;