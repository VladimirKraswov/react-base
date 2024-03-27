import React, { Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';


const LazyPageOne = React.lazy(() => import('./pages/PageOne'))
const LazyPageTwo = React.lazy(() => import('./pages/PageTwo'))

function AppLazy() {

  return (
    <div style={styles.container}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/page-one" element={<LazyPageOne/>} />
            <Route path="/page-two" element={<LazyPageTwo />} />
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
