# CRUD de Usuários — TypeScript

CRUD simples em linha de comando (CLI) para cadastrar, listar, editar e excluir usuários, feito em TypeScript com `prompt-sync`.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado v18 ou superior)
- npm (já vem junto com o Node.js)

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Viniiwxz7/Crud---TypeScript.git
cd Crud---TypeScript
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o projeto

Se o projeto usa **ts-node** (roda o `.ts` diretamente, sem precisar compilar):

```bash
npx ts-node main.ts
```

Se preferir **compilar antes de rodar**:

```bash
npx tsc main.ts
node main.js
```

## Funcionalidades

- Cadastrar usuário (nome, idade, CPF, data de nascimento)
- Listar todos os usuários cadastrados
- Editar um usuário existente (buscando por CPF)
- Excluir um usuário (buscando por CPF)

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) — leitura de dados via terminal

## Observação

Os dados são armazenados apenas em memória durante a execução — ao fechar o programa, os usuários cadastrados são perdidos. Não há persistência em banco de dados ou arquivo.
