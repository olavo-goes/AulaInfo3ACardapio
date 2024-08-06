import "../src/globals.css";
import { useState } from "react";

export default function App() {
    const [listaProdutos, setProdutos] = useState([

        {

            id: 1,

            item: "Hambúrguer",

            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",

            preco: "R$ 25,99"

        },

        {

            id: 2,

            item: "Coca-cola 350ml",

            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",

            preco: "R$ 5,99"

        },

        {

            id: 3,

            item: "Batatas fritas",

            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",

            preco: "R$ 8,99"

        },

        {

            id: 4,

            item: "Suco de Frutas",

            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",

            preco: "R$ 8,99"

        },

    ]);
   
    const [listaProdutosPedidos, setPedidos] = useState([])
    const adicionarProdutoPedido = (produto) => {
        setPedidos([...listaProdutosPedidos, produto])
    }

console.table(listaProdutosPedidos)

    const removerItem = (id, listaProdutosPedidos) => {
        let listaAux = listaProdutosPedidos.filter((pedido) => pedido.id !== id)
        if(listaAux !== pedido.id){
            return listaAux
        }
        else{
            return null
        }
    }

    return (
       <div className="bloco-principal">
        <div className="bloco-produtos">
        {listaProdutos.map((produto) => <div key={produto.id}>
            <img src={produto.imagem}/>
             <p>{produto.item}</p>
             <p>{produto.preco}</p>
             <button onClick={() => adicionarProdutoPedido(produto)}>Pedir</button>
            </div>)}
       </div>


    <div className="bloco-pedidos">
        <p>meus pedidos</p>
        <table>
            <tr>
                <th>pedido</th>
                <th>produto</th>
                <th>preço</th>
            </tr>
        </table>

            {
                listaProdutosPedidos.map((produto) => (
                    <div key={produto.id}>
                        <table>
                            <tr>
                                <td><img src={produto.imagem}></img></td>
                                <td>{produto.item}</td>
                                <td>{produto.preco}</td>
                                <td>
                                    <button onClick={() => removerItem(produto.id)}>X</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                ))
            }
    </div>
       </div>
    );
}
