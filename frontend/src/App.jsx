import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateTasks from './components/UpdateTasks';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } />
            <Route path='/update/:id' element={ <UpdateTasks/> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <SignUp /> } />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
