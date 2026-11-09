import "./CardProduto.css"

function CardProduto({nome, banda, preco, genero, categoria, imagem}){
    const valor = preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    return(
        <article className="card">
            <img src={imagem} alt={nome}/>
            <div className="card-info">
                <p className="cat-gen">{categoria} · {genero}</p>
                <h3>{nome}</h3>
                <p className="banda">{banda}</p>
                <div className="card-rodape">
                    <p className="preco">{valor}</p>
                    <button type="button" className="btn-comprar">Comprar</button>
                </div>            
            </div>            
        </article>
    )

}
export default CardProduto;