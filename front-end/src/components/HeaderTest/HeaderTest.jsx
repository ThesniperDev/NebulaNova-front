import './HeaderTest.css'
import { Link, useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'

function Navbar () {
  const navigate = useNavigate()

  const [hamburger, setHamburger] = useState(false)

  const toggleMenu = () => {
    setHamburger(!hamburger)
  }

  const signOut = async () => {
    navigate('/')
  }

  return (
    <nav className='menu'>
      <div className='logo-header'>
        <div className='logo'>
        </div>
      </div>
      <section className='menu__container'>
        <ul className={`menu__links ${hamburger ? 'menu__links--show' : ''}`}>
          {hamburger && (
            <div className='menu__close fa-xl'>
              <IconButton className='menu__imgcl' onClick={toggleMenu}>
                <CloseIcon />
              </IconButton>
            </div>
          )}
          <li className='menu__item'>
            <Link to='/home' className='menu__link'>Home</Link>
          </li>
          <li className='menu__item menu__item--show'>
            <Link to='/games' className='menu__link'>
              Games
            </Link>
          </li>
          <li className='menu__item menu__item--show'>
            <Link to='/reviews' className='menu__link'>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <section className='menu__container'>
        <ul className={`menu__links ${hamburger ? 'menu__links--show' : ''}`}>
          {localStorage.getItem('token') === null && (
            <li className='menu__item'>
              <Link to='/register' className='menu__link'>
                Registro
              </Link>
            </li>
          )}
          <li className='menu__item'>
            {localStorage.getItem('token') !== null
              ? <button onClick={signOut} className='menu__link'>Cerrar Sesión</button>
              : <Link to='/login' className='menu__link'>Iniciar Sesión</Link>}
          </li>
        </ul>
      </section>
        
        <div className='menu__hamburguer'>
          <IconButton className='menu__img' onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        </div>
    </nav>
  )
}

export default Navbar