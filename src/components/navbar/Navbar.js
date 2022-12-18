import './navbar.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to='/'>
          <span className='logo'>Travel Discovery</span>
        </Link>

        <div className='navItems'>
          <div className='navSearch'>
            <input type='text' className='inputSearch' />
            <AiOutlineSearch className='searchIcon' />
          </div>

          <span className='navBtn'>Register</span>
          <span className='navBtn'>Log in</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
