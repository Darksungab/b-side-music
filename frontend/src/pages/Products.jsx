import CardProduto from "../components/CardProduto.jsx";
import prods from "../data/produtos.js";
import "./Products.css"
function Products() {
    return (
        <section className="produtos">
            <h2>Produtos</h2>
            <div className="vitrine">
                {prods.map((prod) => (
                    <CardProduto
                    key={prod.id}
                    nome={prod.nome}
                    banda={prod.banda}
                    preco={prod.preco}
                    genero={prod.genero}
                    categoria={prod.categoria}
                    imagem={prod.imagem}                
                    />
                ))}
            </div>
        </section>
    );
}

export default Products;