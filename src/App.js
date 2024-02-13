import './App.css';

import Hero from './components/Hero'
import NavBar from './components/NavBar';
import Card from './components/Card';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <div className='top-wave animate-top-bot'></div>

      <NavBar /> {/* header section*/}
      <Hero /> {/* body section*/}
      <Card /> {/* project section*/}
      <About />
      <Contact />
    </div>
  );
}
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.top-wave');
    elements.forEach(element => {
      element.classList.add('animate'); // Add a class to trigger the animation
    });

    const handleOnMouseMove = e => {
      const {currentTarget: target} = e;

      const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x" , `${x}px`);
      target.style.setProperty("--mouse-y" , `${y}px`);
    }

    for(const card of document.querySelectorAll(".about-card")){
      card.onmousemove = e => handleOnMouseMove(e);
    }  
});

export default App;
