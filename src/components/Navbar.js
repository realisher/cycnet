import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth<=960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  },[]);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
          CYCNET 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
              News
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
              Courses
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Members
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
              Contacts
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign up
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signin' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign in
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--white'>SIGN UP</Button>}
        {button && <Button  buttonStyle='btn--outline'>SIGN IN</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar
