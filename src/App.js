import logo from './logo.svg';
import './App.css';
import { useObserver } from './hooks/useObserver';
import React, { useEffect, useRef } from 'react';

function App() {

  const [ref, isVisible] = useObserver({ rootMargin: '-200px' })



  useEffect(() => {
    console.log(ref, isVisible)

  }, [ref, isVisible])




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>
          scroll 200px
        </h3>
      </header>
      <main ref={ref} className={`main ${isVisible ? 'active' : ''}`} >
        <img style={{ opacity: isVisible ? 1 : 0, transform: `translateX(${isVisible ? '0' : '100px'})` }} src="https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png" alt="" />
      </main>
    </div>
  );
}

export default App;