import LoginForm from './components/loginForm';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Logout from './components/logout';
import { NavBar } from './components/navBar';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;