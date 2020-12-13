import {useEffect, useState} from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import Infos from './Infos'

export default function Pedidos(props){

     const [infos, setInfos] = useState([])

    const envioPedido = async (evento) => {
        const url = "http://localhost/conexao/api/pedidosv2.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado)
    }

   
        useEffect(() => {
        async function mostraInfos() {
            const url = "http://localhost/conexao/api/pedidosv2.php"
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setInfos(resultado);
        
        }
        
        mostraInfos();
    })
    

    return(
        <Row>
        <div className='container container-fluid formulario'>
            <div className="col lg-6 mx-auto">
            <Form onSubmit={envioPedido}> 
            <h3 className="titulo-form-">Faça seu pedido</h3>
            <Form.Group>
                            <Form.Label>Nome </Form.Label>
                            <Form.Control type="text" id="nome" name="nome"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>cidade</Form.Label>
                            <Form.Control type="text" id="cidade" name="cidade"></Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Produto</Form.Label>
                            <Form.Control id='produto' name="produto" as="select">
                            <option value='21' >Televisor semp 20 polegadas</option> 
                            <option value='22' >Televisor phillips 20 polegadas</option> 
                            <option value='23' >Televisor Sony polegadas</option> 
                            <option value='24' >Playstation 1 Sony classic</option> 
                            <option value='25' >Super Nintendo</option> 
                            <option value='26' >Playstation 2 Sony</option> 
                            <option value='27' >Walkman discman Sony portátil cd player</option> 
                            <option value='28' >DvD Mondial</option> 
                            <option value='29' >Nintendo game boy</option> 
                            </Form.Control>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Quatidade </Form.Label>
                            <Form.Control type="number" id="quantidade" name="quantidade"></Form.Control>
                        </Form.Group>

                            <Button variant='sucess' type='submit'>Enviar</Button>
                        </Form>
                        </div>
                        </div>

            <div className="row">
                <div className="col-lg-12 col-md-12 mx-auto">
                    <table className="table table-stripe">
                        <tbody>
                            {infos && infos.map(cadastro => <Infos key={cadastro.id} nome={cadastro.nome} cidade={cadastro.cidade} produto={cadastro.produto} descricao={cadastro.descricao} quantidade={cadastro.quantidade} precofinal={cadastro.precofinal} />) }
                      
                      </tbody>
                </table>
                </div>
            </div>
        </Row>

        );
    }