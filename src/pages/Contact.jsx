import BannerGarantia from "../components/BannerGarantia.jsx";
import CardContato from "../components/CardContato.jsx";
import "./Contact.css"
import {FaWhatsapp, FaEnvelope, FaClock, FaMapMarkerAlt} from "react-icons/fa";
function Contato(){
    return(
        <section className="contato">
            <h2>Fale Conosco!</h2>
            <p className="subtitulo">Dúvidas sobre um disco, trocar pedido? Conte com a gente.</p>
            <div className="contato-conteudo">
                <address className="contato-lista">
                    <CardContato
                        icone={<FaEnvelope />}
                        titulo="E-mail"
                        texto="B.Side.Vinil@outlook.com"
                        link="mailto:B.Side.Vinil@outlook.com"
                    />
                    <CardContato
                        icone={<FaWhatsapp />}
                        titulo="WhatsApp"
                        texto="(11) 98765-4321"
                        link="https://wa.me/"
                    />
                    <CardContato
                        icone={<FaMapMarkerAlt />}
                        titulo="Endereço"
                        texto="Rua do Vinil, 15 Cotia -  SP"
                    />
                    <CardContato
                        icone={<FaClock />}
                        titulo="Funcionamento"
                        texto="9:00 até 19:00"
                    />
                </address>
                <BannerGarantia/>
            </div>
            

        </section>
    )
}
export default Contato;