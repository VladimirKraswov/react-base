import React from 'react';

import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';


function AppLazy() {

  return (
    <div style={styles.container}>
      <PageTwo />
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

export default AppLazy;
