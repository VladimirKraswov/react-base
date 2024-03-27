import React from 'react';

import girlImageImports from '../assets';


function PageOne() {


  return (
    <div style={styles.container}>
        <img src={girlImageImports[0]} alt="Current img" />
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

export default PageOne;
