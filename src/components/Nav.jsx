import './Nav.css'
import { hamburger, logo, profile } from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header>
      <nav className='navbar'>
        <a href="/">
          <img src={logo} alt="logo"
          width={108}
          height={24}     
          />
        </a>
        <ul className='navLinks'>
          {
            navLinks.map((items)=>(
                    <li key={items.label} >
                      <a href={items.href}>{items.label}</a>    
                    </li>
            ))
          }
        </ul>
        <a href="/" className='profile'>
            <img src={profile} alt="account"
            width={24}
            height={24}
            />
            Account 
        </a>
        <a href="/" className='hamburger'>
          <img src={hamburger} alt="hamburger"
          width={30}
          height={30}
          />
        </a>
      </nav>
    </header>
  )
}

export default Nav;