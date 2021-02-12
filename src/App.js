
import {lazy, Suspense} from 'react';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Container, container } from 'react-bootstrap';
import  './App.css'

//import Menu from './components/Menu/index'
//import Rotas from './rotas';

const Menu = lazy(() => import('./components/Menu/index'))
const Rotas = lazy(() => import('./rotas'))
const Rodape = lazy(() => import('./components/Rodape'))
const Info = lazy(() => import('./components/Info'))

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>

        <Suspense fallback={ <p>Carregando...</p>}>
          <Menu />
        </Suspense>
          
        </header>
      <main>
        <Container fluid>
        <Suspense fallback={ <p>Carregando...</p>}>
        <Rotas />
        </Suspense>
        </Container>
      </main>
      <footer>

      <Suspense fallback={ <p>Carregando...</p>}>
        <Info />
        </Suspense>

      <Suspense fallback={ <p>Carregando...</p>}>
        <Rodape />
        </Suspense>
      </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
