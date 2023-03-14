import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateTasks from './components/UpdateTasks';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/update/:id' element={ <UpdateTasks/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
