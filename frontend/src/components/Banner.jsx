import { Link } from "react-router-dom";
import "./Banner.css"

function Banner(){
    return(
        <section className="banner">
            <div className="texto">
                 <h2>Dê play no Lado B!</h2>
                 <p>Discos, camisetas e raridades do underground.</p>
                 <Link to="/produtos" className="btn-prod">Ver produtos</Link>
            </div>
            <div className="disco">
                <img src="/disco-raio.svg" alt=""/>
            </div>           
        </section>
    )
}
export default Banner;