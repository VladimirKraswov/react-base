import React, { Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import App from './App';


function AppLazy() {

  return (
    <div style={styles.container}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Routes>
      </Suspense>
    </Router>
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
