import React from 'react';
import GradientAnimation from '../components/GradientAnimation';


function PageTwo() {


  return (
    <div style={styles.container}>
       <GradientAnimation />
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

export default PageTwo;
