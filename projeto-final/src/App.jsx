import React, { useEffect, useState } from 'react';
import { fetchData } from './api/api';
import Card from './components/Card';
import './styles/global.css';
import './styles/card.css';

const App = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const { data } = await fetchData('games');
        console.log('Dados recebidos da API:', data);  // Adicionando log
        setGames(data.slice(0, 9));  // Apenas 9 jogos
      } catch (error) {
        setError('Não foi possível carregar os jogos. Tente novamente mais tarde.');
        console.error('Erro ao carregar dados:', error);  // Log para erro
      } finally {
        setLoading(false);
      }
    };
    fetchGamesData();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img className="logo" src="/src/assets/logo.png" alt="Logo" />
        <nav className="menu">
          <a href="#login">LOGIN</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="content-box">
          <aside className="sidebar">
            <button>LANÇAMENTOS</button>
            <button>CATEGORIAS</button>
            <button>TOP 10</button>
          </aside>

          <section className="cards-container">
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            {games.length > 0 ? (
              games.map((game) => (
                <Card key={game.id} data={game.attributes} />
              ))
            ) : (
              <p>Nenhum jogo encontrado.</p>
            )}
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <img className="logo" src="/src/assets/logo.png" alt="Logo" />
          <p>77°26'58.9"N 90°19'23.2"W | 2024 | todos os direitos reservados | hello@1up.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
