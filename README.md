
# LiveScoreBR

LiveScoreBR é um sistema web composto por um backend e um frontend, projetado para extrair e exibir resultados de partidas de futebol em tempo real, feito em 2023.

## Arquitetura e Funcionamento

O projeto utiliza uma abordagem de web scraping para coletar os dados atualizados das partidas. 

- **Backend:** Desenvolvido em Node.js. Utiliza o framework Express para expor a API e o Puppeteer para realizar a extração automatizada (scraping) dos dados de placares diretamente das páginas web.
- **Frontend:** Consome a API REST fornecida pelo backend e renderiza a interface para o usuário.

## Requisitos

- Node.js instalado no ambiente (compatível com Linux/Ubuntu ou Windows).
- Gerenciador de pacotes (npm ou yarn).

## Instalação e Execução

As duas aplicações (backend e frontend) devem ser inicializadas separadamente.

### Backend

1. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o serviço:
   ```bash
   npm start
   ```

### Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   npm start
   ```

## Demonstração


https://github.com/user-attachments/assets/5d0f8dfb-94aa-4a16-804c-d8c9dec43576


