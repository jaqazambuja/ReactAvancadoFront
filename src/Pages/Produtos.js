import { useState, useEffect } from 'react';


import Produto from '../components/Produto'
import { container, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/conexao/api/api_produtos.php")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.nome} preco={item.preco}
                categoria={item.televisores} />)}
            </Row>
        </Container>
    )
}



