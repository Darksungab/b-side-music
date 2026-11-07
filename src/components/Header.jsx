import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header(){
    return(        
        <header className="cabecalho">
            <h1 className="logo"><Link to="/"><img src="/logo.svg" alt="B-Side Music"></img></Link></h1>
            <nav className="cabecalho-menu">
                <NavLink to="/" className="btn-nav">Início</NavLink> 
                <NavLink to="/produtos" className="btn-nav">Produtos</NavLink>
                <NavLink to="/contato" className="btn-nav">Contato</NavLink>
            </nav>
        </header>
    );
}

export default Header;