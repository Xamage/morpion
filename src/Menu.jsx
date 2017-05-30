import { Link } from 'react-router-dom';

const Menu = () => (
    <ul className="menu">
        <li className="menu-entry"><Link to="/tictactoe">Morpion</Link></li>
        <li className="menu-entry"><Link to="/power4">Puissance 4</Link></li>
        <li className="menu-entry"><Link to="/checkers">Dames</Link></li>
        <li className="menu-entry"><Link to="/chess">Echecs</Link></li>
    </ul>
);

export default Menu;