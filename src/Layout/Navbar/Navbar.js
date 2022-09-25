import React from 'react';
import { Link } from 'react-router-dom'
import { SiPokemon as PokemonIconAlt} from 'react-icons/si'
import './Navbar.css';

const NavBar = () => {
    
        return (
            <nav className="navbar-wrapper pt-4 pt-lg-5 px-1 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link to = '/' className = "navbar-brand">
                                <h1 className="entry-title">PokeApp WannaBe</h1>  
                                <PokemonIconAlt className = "navbar-icon" size="150px"/>
                            </Link>
                       </div>
                    </div>
                </div>
            </nav>

        )
}
export default NavBar;