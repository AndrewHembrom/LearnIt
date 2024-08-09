import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import Header from './components/Header/Header.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Verify from './pages/auth/Verify.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/about/About.jsx';
import Account from './pages/account/Account.jsx';
import { UserData } from './context/UserContext.jsx';

const App = () => {
  const { isAuth, user} = UserData();
  return (
    <div>
      <BrowserRouter>
        <Header isAuth={ isAuth } />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={isAuth ? <Account user={ user } /> : <Login/> } />
          <Route path='/login' element={ isAuth ? <Home /> : <Login/> } />
          <Route path='/register' element={ isAuth ? <Home /> : <Register />} />
          <Route path='/verify' element={ isAuth ? <Home /> : <Verify/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
