import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Tarefas em React</h1>
      <nav>
        <ul>  
          <li>
            <Link to={"/Atividade01"}>Atividade 1 - Letreiro e Relogio </Link>
          </li>
         </ul>
      </nav>
      <footer>
            © 2024 | Desenvolvido por Adryan Ramos
      </footer>
    </div>
  );
}

export default Home;
