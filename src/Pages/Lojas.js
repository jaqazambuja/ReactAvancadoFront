import React from 'react';

// import { Container } from './styles';

function Lojas() {
    return (
        <React.Fragment>
            <header>
                <h2 className="display-5">Nossas lojas</h2>
                <hr />
            </header>
            <nav>
                <section>
                <div className="container" class="shadow-lg p-3 mb-5 bg-white rounded"  className="p-3 mb-2 bg-transparent text-dark"> 
                <div className="row">
                <div className="col-sm">
                        <h3>São Paulo</h3>
                        <p>Avenida Queixadas, 7</p>
                        <p>10 ºandar</p>
                        <p>Itaim Paulista</p>
                        <p>(11) 5555-5555</p>
                </div>
                    
                <div class="col-sm">
                        <h3>São Paulo</h3>
                        <p>Rua São Dário, 257</p>
                        <p>11 ºandar</p>
                        <p>Butantã</p>
                        <p>(11) 0000-0000</p>
                </div>
                    
        
                <div class="col-sm">
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida Nossa Senhora de Copacabana, 897</p>
                        <p>9 ºandar</p>
                        <p>Copacabana</p>
                        <p>(21) 3333-3333</p>
                    </div>
                    </div>
                    </div>
                    

                </section>
            </nav>
        </React.Fragment>
    )
}

export default Lojas;