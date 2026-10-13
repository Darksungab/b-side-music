import { Link } from "react-router-dom";
import "./Header.css";

function Header(){
    return(        
        <header className="cabecalho">
            <h1 className="logo"><Link to="/"><img src="/logo.svg" alt="B-Side Music"></img></Link></h1>
            <nav className="cabecalho-menu">    
                <Link to="/" className="btn-nav">Início</Link>
                <Link to="/produtos" className="btn-nav">Produtos</Link>
                <Link to="/contato" className="btn-nav">Contato</Link>
            </nav>
        </header>
    );
}

export default Header;