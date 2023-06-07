import React, { useState, useEffect } from 'react';
import './assets/css/style.css';

function App() {
  const [showElements, setShowElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setShowElements((prevElements) => [...prevElements, entry.target.id]);
        } else {
          setShowElements((prevElements) =>
            prevElements.filter((el) => el !== entry.target.id)
          );
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <section id="element1" className={`hidden ${showElements.includes('element1') ? 'show' : ''}`}>
        <h1>
          <img id="boat" src="boat.png" alt="A boat" />
          <br />
          <br />
          Arklink Solutions
        </h1>
      </section>
      <section id="element2" className={`hidden ${showElements.includes('element2') ? 'show' : ''}`}>
        <h1>Hey</h1>
        <p>This is my website</p>
      </section>
      <section id="element3" className={`hidden ${showElements.includes('element3') ? 'show' : ''}`}>
        <h1>nice to meet u</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores.</p>
      </section>
      <section id="element4" className={`hidden ${showElements.includes('element4') ? 'show' : ''}`}>
        <h1>hey its me</h1>
        <div className="logos flex">
          <div className={`logo hidden ${showElements.includes('logo1') ? 'show' : ''}`}>
            <img src="./client2.jpg" alt="" />
          </div>
          <div className={`logo hidden ${showElements.includes('logo2') ? 'show' : ''}`}>
            <img src="./client2.jpg" alt="" />
          </div>
          <div className={`logo hidden ${showElements.includes('logo3') ? 'show' : ''}`}>
            <img src="./client2.jpg" alt="" />
          </div>
          <div className={`logo hidden ${showElements.includes('logo4') ? 'show' : ''}`}>
            <img src="./client2.jpg" alt="" />
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Arklink Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
