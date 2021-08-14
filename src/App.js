import logo from './logo.svg';
import './App.css';
import { useObserver } from './hooks/useObserver';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [ref, isVisible] = useObserver({ rootMargin: '-200px' })
  const [isScrollDown, setIsScrollDown] = useState(false);


  useEffect(() => {
    console.log(ref, isVisible)
    let prevWindowY = 0
    const onWindowScroll = (e) => {
      if (!isVisible) return
      const currentWindowY = window.pageYOffset
      setIsScrollDown(currentWindowY > prevWindowY)
      console.log(isScrollDown)

      prevWindowY = currentWindowY
    }
    window.addEventListener('scroll', onWindowScroll)

    return () => {
      console.log('clean up')
      window.removeEventListener('scroll', onWindowScroll)
    }

  }, [isVisible,])

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
      {isScrollDown && 'asdf'}
      <main ref={ref} className={`main ${isVisible ? 'active' : ''}`} >
        <img style={{ opacity: isVisible ? 1 : 0, transform: `translateX(${isVisible ? '0' : '100px'})` }} src="https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png" alt="" />
      </main>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Home</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Links</li>
          <li className="nav__item">Archive</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;