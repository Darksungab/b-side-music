import "./CardContato.css"

function CardContato({icone, titulo, link, texto}){
    return(
    <div className="contato-item">
        <span className="icone">{icone}</span>
        <h3>{titulo}</h3>
        {link ? <a href={link} target={link.startsWith("http") ? "_blank" : undefined} rel={link.startsWith("http") ? "noopener noreferrer" : undefined}>{texto}</a> : <p>{texto}</p>} 
    </div>
    )
}

export default CardContato;