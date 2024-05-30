import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSignInDialog = () => {
    setShowSignInDialog(!showSignInDialog);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500}>
            Contact us
          </Link>
        </li>
        <li>
          <button onClick={toggleSignInDialog} className='btn'>Sign in</button>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
      
      {showSignInDialog && (
        <div className="signin-dialog-overlay" onClick={toggleSignInDialog}>
          <div className="signin-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleSignInDialog}>&times;</button>
            <h2>Sign In</h2>
            <form>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
