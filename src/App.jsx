import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;
