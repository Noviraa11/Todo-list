import {Navbar} from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar className='navbar' fixed='top' variant="dark">
        <a href='/' className='logo'>TO DO LIST APP</a>
    </Navbar>
  );
}

export default Header;