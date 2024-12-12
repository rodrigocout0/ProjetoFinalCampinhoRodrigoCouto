<div style="display: flex; align-items: center;">
  <img src="projeto-final/src/assets/logo.png" alt="Logo" style="height: 50px; margin-right: 10px;" />
  <h1>1 Up - Plataforma de Consulta de Jogos</h1>
</div>

**1 Up** é o projeto final do curso Web Front End da Campinho Digital. Desenvolvido com React, a aplicação permite que os usuários explorem dados de jogos de forma funcional, acessível e responsiva. A plataforma integra dados fornecidos por uma API para exibir informações detalhadas sobre jogos, categorizados para facilitar a busca e exploração.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a criação da interface de usuário.
- **CSS**: Estilização responsiva e moderna utilizando flexbox e grid.
- **API**: Consumo de dados de uma API externa para exibição de informações sobre jogos.

## Funcionalidades

- **Exibição de Jogos**: A aplicação mostra dados sobre jogos com título, descrição, gênero e classificação.
- **Interface Responsiva**: O design é responsivo e se adapta a diferentes tamanhos de tela.
- **Filtragem e Categorias**: Os usuários podem filtrar jogos por categoria e acessar listas como "Lançamentos" e "Top 10".
- **Feedback de Erro**: Caso não seja possível carregar os dados, uma mensagem de erro é exibida.

## Como Rodar o Projeto

1. **Clone o repositório** para sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/1-up.git
    ```

2. **Navegue até o diretório do projeto**:

    ```bash
    cd 1-up
    ```

3. **Instale as dependências**:

    ```bash
    npm install
    ```

4. **Inicie o servidor de desenvolvimento**:

    ```bash
    npm start
    ```

5. **Acesse o projeto no navegador**: [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto
```bash
A estrutura do projeto é a seguinte:
src/
├── components/
│   ├── Card.jsx           # Componente de exibição de jogo
├── api/
│   ├── api.js             # Função para fazer requisição à API
├── App.jsx                # Componente principal da aplicação
├── main.jsx               # Arquivo de inicialização
└── styles/
    ├── global.css         # Estilos globais da aplicação
    └── card.css           # Estilos específicos do card


### Descrição dos Arquivos

- **main.jsx**: Configura a renderização do aplicativo React.
- **App.jsx**: Componente principal que carrega os jogos da API e organiza a estrutura da página.
- **Card.jsx**: Componente que exibe os detalhes de cada jogo.
- **global.css**: Estilos gerais da aplicação, incluindo a estrutura do layout e cores.
- **card.css**: Estilos específicos para os cartões de jogo, incluindo bordas, sombras e layout.
- **index.css**: Estilos básicos, incluindo fontes e configurações globais.

## Como Funciona

1. **Componente App.jsx**:
    - Faz uma requisição para a API para buscar os dados dos jogos.
    - Os dados são armazenados no estado (`games`) e são renderizados em uma lista de componentes `Card`.

2. **Componente Card.jsx**:
    - Cada card exibe uma imagem do jogo, título, descrição, gênero e nota.

3. **Estilos**:
    - Utilizamos CSS para tornar a interface responsiva, com flexbox e grid para distribuir os elementos.

4. **Erro de Carregamento**:
    - Caso haja um erro ao carregar os dados da API, uma mensagem de erro é exibida para o usuário.

## Imagens

![Logo](src/assets/logo.png)

## Contribuições

Sinta-se à vontade para abrir **issues** e **pull requests** para melhorias ou correções de bugs!

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

