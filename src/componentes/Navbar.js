import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav className="nemezes">
            <ul className="nemezes-nav">
                <li className="nemezes-nav-item">
                    <Link className="nemezes-nav-link" to="/"><h4>Home</h4></Link>
                </li>
                <li className="nemezes-nav-item">
                    <Link className="nemezes-nav-link" to="/quemsomos"><h4>Quem Somos?</h4></Link>
                </li>
                <li className="nemezes-nav-item">
                    <Link className="nemezes-nav-link" to="/contato"><h4>Contato</h4></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
