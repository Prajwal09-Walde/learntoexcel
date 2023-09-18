import { Link } from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { RegisterContext } from '../../context/RegisterContext';

const Navbar = () => {

    const {user} = useContext(LoginContext, RegisterContext);

    return (
        <div className='navbar'>
            <div className='nContainer'>
              {user ? user.email: <div className='nItem'>
                <Link to="/register">
                    <button className='nButton'>Register</button>
                </Link>
              </div>}
            </div>
        </div>
    );
}

export default Navbar;
