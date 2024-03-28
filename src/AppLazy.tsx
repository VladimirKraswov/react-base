import React, { Suspense, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';


// const LazyPageOne = React.lazy(() => import('./pages/PageOne'))
// const LazyPageTwo = React.lazy(() => import('./pages/PageTwo'))

function AppLazy() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div style={styles.container}>
      {currentPage === 0 && <App />}
      {currentPage === 1 && <PageOne />}
      {currentPage === 2 && <PageTwo />}
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next Page</button>
      <button onClick={() => setCurrentPage((prev) => prev - 1)}>Prev Page</button>
{/* 
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/page-one" element={<PageOne/>} />
            <Route path="/page-two" element={<PageTwo />} />
          </Routes>
        </Suspense>
      </Router> */}
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
