import "./Footer.css";
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";

function Footer(){
    const anoAtual = new Date().getFullYear();
    return(
        <footer className="rodape">
            <div className="sociais">
                <a target="_blank" rel="noopener noreferrer" aria-label="Facebook da B-Side" href="https://facebook.com">
                    <FaFacebook />
                </a>
                <a target="_blank" rel="noopener noreferrer" aria-label="Instagram da B-Side" href="https://instagram.com">
                    <FaInstagram />
                </a>
                <a target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da B-Side" href="https://wa.me/">
                    <FaWhatsapp />
                </a>
            </div>          
            <p className="autor">Desenvolvedor: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/figueiredoribeiro">Gabriel Figueiredo Ribeiro</a> - {anoAtual}</p>
        </footer>
    )
}

export default Footer