import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
    const navigate = useNavigate()

  return (
    <div className='home-cont'>
        <div className="home">
            <div className="home-content">
                  <h1>Welcome to Learn-It</h1>
                  <p>Learn Something Cool</p>
                  <button onClick={() => navigate("/courses") } className='common-btn'>Get Started</button>
            </div>
          </div>
          <Testimonials/>
    </div>
  )
}

export default Home
