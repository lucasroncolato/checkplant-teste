# Checkplant - Teste ReactJS

Este repositório contém a implementação do teste solicitado pela Checkplant 🌱, onde foi desenvolvida uma aplicação front-end para gerenciar pontos de coleta de informações em uma área georreferenciada. A aplicação foi construída utilizando React e Leaflet como engine de mapas.

## 🚀 Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

### Clone o repositório:
```bash
git clone https://github.com/lucasroncolato/checkplant-teste.git
cd checkplant
```

### Instale as dependências:
```bash
npm install
```

### Inicie o servidor de desenvolvimento:
```bash
npm start
```
O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

### Para rodar os testes:
```bash
npm test
```

### Para construir o projeto para produção:
```bash
npm run build
```

## 👋 Funcionalidades Implementadas

A aplicação atende aos seguintes requisitos:

- **Adicionar pontos no mapa**: O produtor pode adicionar novos pontos de coleta clicando no mapa.
- **Ordem de criação dos pontos**: Cada ponto exibe um número que indica a ordem em que foi criado.
- **Data de criação dos pontos**: A data e hora de criação de cada ponto são exibidas.
- **Mover pontos**: Os pontos podem ser arrastados para novas localizações no mapa.
- **Remover um ponto**: Um ponto pode ser removido individualmente.
- **Excluir todos os pontos**: Todos os pontos podem ser removidos de uma vez.

## 🛠 Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface do usuário.
- **Leaflet**: Biblioteca JavaScript para mapas interativos.
- **Turf.js**: Biblioteca para manipulação de dados geoespaciais.
- **Tailwind CSS**: Framework CSS para estilização.
- **React Testing Library**: Para testes unitários e de integração.

## 🎨 Protótipo e Assets

- O protótipo da aplicação pode ser visualizado [aqui](#).
- Os assets utilizados no projeto estão disponíveis [aqui](#).

## 📝 GeoJSON

O polígono que representa a área foi carregado a partir do arquivo GeoJSON fornecido, disponível [aqui](#).

## 📂 Estrutura do Projeto

```
checkplant/
├── src/
│   ├── components/  # Contém os componentes React utilizados na aplicação.
│   ├── pages/       # Contém as páginas da aplicação.
│   ├── assets/      # Contém os ícones e outros recursos visuais.
│   ├── utils/       # Contém utilitários e funções auxiliares.
│   ├── tests/       # Contém os testes da aplicação.
```

## 📝 Considerações Finais

Este projeto foi desenvolvido com o objetivo de demonstrar habilidades em desenvolvimento front-end, utilizando tecnologias modernas e boas práticas de programação. Espero que atenda às expectativas e requisitos solicitados.

