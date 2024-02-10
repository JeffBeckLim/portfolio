import './App.css';

import Hero from './components/Hero'
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <div className='top-wave'></div>
      <NavBar />  
      <Hero />
    </div>
  );
}

export default App;
