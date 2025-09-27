# Join-Lines

Join-Lines é uma ferramenta web simples e eficiente para processar texto. Com ela, você pode transformar parágrafos, listas ou linhas soltas em uma única linha contínua, removendo quebras de linha e espaços em branco extras.  

## 📌 Funcionalidades
- Unifica múltiplas linhas de texto em uma única linha.  
- Remove espaços desnecessários para um resultado limpo e compacto.  
- Processamento em tempo real, sem necessidade de configurações adicionais.  

## 🚀 Instalação e Execução  

### 📋 Pré-requisitos  
Para executar a aplicação, você precisará ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados em seu computador. O npm já vem instalado com o Node.js.

### 🔧 Passo a passo  

1. **Clone o repositório:**  
   Você pode baixar o código-fonte do projeto clicando no botão "Code" no topo da página do GitHub e selecionando "Download ZIP". Extraia o arquivo ZIP em uma pasta de sua preferência.

   Ou, se você tiver o Git instalado, pode clonar o repositório com o seguinte comando:
   ```sh
   git clone https://github.com/seu-usuario/join-lines.git
   cd join-lines
   ```

2. **Instale as dependências:**
   Abra o terminal (ou o prompt de comando) na pasta do projeto e execute o seguinte comando. Ele lerá o arquivo `package.json` e instalará todas as dependências necessárias automaticamente.
   ```sh
   npm install
   ```

3. **Inicie a aplicação:**
   Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação:
   ```sh
   npm start
   ```

## 📦 Empacotando a Aplicação

Se você quiser criar uma versão executável da aplicação (um arquivo que pode ser executado sem a necessidade de instalar o Node.js), você pode empacotá-la. Para fazer isso, execute o seguinte comando no terminal:

```sh
npm run dist
```

Isso criará uma pasta `dist` com o arquivo executável para o seu sistema operacional.
