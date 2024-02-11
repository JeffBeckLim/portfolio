import './App.css';

import Hero from './components/Hero'
import NavBar from './components/NavBar';
import Card from './components/Card';
function App() {
  return (
    <div>
      <div className='top-wave animate-top-bot'></div>

      <NavBar />
      <Hero />
      <Card />
    </div>
  );
}
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.top-wave');
    elements.forEach(element => {
      element.classList.add('animate'); // Add a class to trigger the animation
    });
});
export default App;
