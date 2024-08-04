import React from 'react'
import './footer.css';
import { AiFillGithub } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
      <footer>
          <div className="footer-content">
              <p>
                  &copy; 2024 Learn-It Platform. All rights reserved. 
              </p>
              <div className="social-links">
                  <a href="">
                      <GrLinkedin />
                  </a>
                  <a href="">
                      <AiFillGithub/>
                  </a>
                  <a href="">
                      <RiTwitterXFill />
                  </a>
              </div>
          </div>
    </footer>
  )
}

export default Footer
