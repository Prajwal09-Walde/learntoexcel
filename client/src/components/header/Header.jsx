import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
          <div className='hContainer'>
            <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
              <span className='logo'>LearnToExcel</span>
            </Link>
          </div>
        </div>
    );
}

export default Header;
