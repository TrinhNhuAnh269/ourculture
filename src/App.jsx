
import React, { useEffect } from 'react';
import Home from './components/Home';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.refresh();
  });
  return <Home />;
}

export default App;