import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='flex'>
        <Home />
      </div>
    </div>
  );
}

export default App;
