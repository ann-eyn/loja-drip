# Loja Drip

**Loja Drip** é uma aplicação web de e-commerce desenvolvida como avaliação final do curso Geração Tech. A plataforma foi projetada para a venda de produtos de moda e estilo, oferecendo uma experiência de compra completa com interface responsiva e navegação intuitiva. Utiliza dados locais simulados para demonstração das funcionalidades.

> **Status do Projeto:** Concluído
> **Acesso ao Projeto:** [Link para o deploy da aplicação no Vercel](https://loja-drip-eta.vercel.app/)

## Funcionalidades

**Catálogo de Produtos:** Listagem dinâmica com opções de filtragem e categorias.

**Carrinho de Compras:** Adição, remoção e visualização de itens escolhidos.

**Autenticação:** Sistema de login e gerenciamento de sessão de usuários.

**Navegação SPA:** Transições fluidas entre páginas sem recarregar o navegador.

**Dados Simulados:** Consumo de dados locais via Axios para demonstração das funcionalidades sem necessidade de um backend robusto ativo.

## Tecnologias Utilizadas

A base do projeto foi construída com as seguintes tecnologias e ferramentas:

* **React:** Biblioteca para construção de interfaces de usuário.
* **Vite:** Ferramenta de build otimizada para desenvolvimento rápido.
* **Tailwind CSS:** Framework de CSS utilitário para estilização e responsividade.
* **React Router DOM:** Gerenciamento de rotas da aplicação.
* **Axios:** Cliente HTTP para integração com a API.
* **React Icons:** Padronização visual da iconografia.
* **ESLint:** Ferramenta de linting para garantir a qualidade e padronização do código.
* **Vitest:** Framework voltado para a execução de testes.

## Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **Git** instalados em sua máquina.

### Instalação
1. Faça o clone do repositório:

```bash
   git clone https://github.com/ann-eyn/loja-drip.git
   ```

2. Acesse o diretório do projeto:
```bash
   cd loja-drip
   ```

3. instale as dependências necessárias:
```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
```bash
   npm run dev
   ```
O servidor será iniciado. Abra o navegador e acesse o link.

## Executando os testes
Para rodar a suíte de testes configurada com o Vitest, utilize o comando:
```bash
   npm run test
   ```
**Desenvolvido por Evelyn Sousa como projeto final do curso Desenvolvedor Web Full Stack - Online - 3.0**