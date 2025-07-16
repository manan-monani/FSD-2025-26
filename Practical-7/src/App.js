import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="app">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="main">
        <header>
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>React Sidebar Navigation</h1>
        </header>
        <section id="home">🏠 Home Section</section>
        <section id="about">👨‍💻 About Section</section>
        <section id="services">🛠️ Services Section</section>
        <section id="contact">📞 Contact Section</section>
      </div>
    </div>
  );
}

export default App;
