//import './Contato.css';
import React from 'react';


export default function Contato(){
    const controleEnvio = async (evento) => {
        

        const url = "http://localhost/conexao/api/contato.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: 'POST',
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado);
    }

    return(
        <div className="container mt-4 contato">
        <h3 className="text-center display-4">Deixe sua mensagem!</h3>
        <form onSubmit={controleEnvio}> 
            <div className="form-group">
                <label for="text">Nome</label>
                <input type="text" className="form-control" name="nome" id="nome"></input>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email"></input>
            </div>
            <div className="form-group">
                <label>Digite sua mensagem</label>
                <textarea class="form-control" name="mensagem" id="mensagem"/>
                <button className="btn btn-primary mt-3" type="submit">Enviar</button>
            </div>
        </form>
        </div>        
    );
}

