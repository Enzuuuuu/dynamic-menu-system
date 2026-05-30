# 🍔 Sistema de Cardápio Digital — Hamburguerias

Cardápio modular e reutilizável. Para um novo cliente, você muda **3 arquivos**:
`src/data/restaurant.js`, `src/assets/logo.png` e `src/assets/banner.jpg`.

---

## Estrutura do projeto

```
src/
├── data/
│   └── restaurant.js   ← 🔥 MUDE ISSO POR CLIENTE
│
├── assets/
│   ├── logo.png        ← troque por cliente
│   └── banner.jpg      ← troque por cliente
│
├── components/
│   ├── Header.js       — barra de título fixa
│   ├── Hero.js         — banner + logo + status aberto/fechado
│   ├── CategoryNav.js  — navegação por categorias
│   ├── ProductCard.js  — card (variante highlight ou list)
│   ├── ProductList.js  — carrossel de destaques + lista filtrada
│   ├── Cart.js         — drawer do carrinho (abre de baixo)
│   └── Checkout.js     — barra inferior + envio pelo WhatsApp
│
├── state/
│   └── cart.js         — estado reativo do carrinho (add/remove/clear)
│
├── utils/
│   ├── whatsapp.js     — monta mensagem e abre WhatsApp
│   └── format.js       — formatação de moeda BRL
│
├── app/
│   └── init.js         — orquestra tudo, monta o DOM
│
├── config/
│   └── theme.js        — cores via CSS variables (ajuste por cliente)
│
└── style.css

index.html
main.js
vite.config.js
```

---

## Setup

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # gera dist/ para deploy
npm run preview  # testa o build
```

---

## Como criar um novo cliente

### 1. Duplique a pasta do projeto
```bash
cp -r gioburger/ novo-cliente/
cd novo-cliente && npm install
```

### 2. Edite `src/data/restaurant.js`
Preencha as informações do cliente: nome, endereço, telefone, horários, categorias e produtos.

```js
export const restaurant = {
  name:    'Burger do Zé',
  phone:   '5583988888888', // WhatsApp sem + nem espaço
  // ...produtos, categorias, etc.
}
```

### 3. Troque as imagens
Substitua `src/assets/logo.png` e `src/assets/banner.jpg`, ou aponte para URLs externas direto no `restaurant.js`.

### 4. Ajuste as cores (opcional)
Edite `src/config/theme.js` para trocar a cor primária, fundo, etc.

```js
export const theme = {
  primary:    '#e63946', // vermelho para o cliente X
  background: '#0f0f0f',
  // ...
}
```

### 5. Build e deploy
```bash
npm run build
# Sobe a pasta dist/ para Vercel, Netlify, Hostinger, etc.
```

---

## Fluxo do usuário

1. Usuário entra no link do cardápio
2. Navega pelas categorias
3. Clica em **+** para adicionar itens ao carrinho
4. Abre o carrinho pelo botão da barra inferior
5. Clica em **Enviar Pedido** → abre o WhatsApp com a mensagem montada automaticamente

---

## Adicionar nova categoria

Em `restaurant.js`, adicione em `categories` e em `products`:

```js
categories: [
  { id: 'burgers', label: '🍔 Hambúrgueres', default: true },
  { id: 'kids',    label: '👶 Kids Menu' },  // ← novo
],

products: [
  {
    id: 'k1', category: 'kids',
    name: 'Mini Burger', price: 22.00,
    description: 'Mini blend + fritas pequena.',
    image: 'https://...',
  },
],
```

---

## Deploy rápido (Vercel)

```bash
npm run build
npx vercel --prod   # deploy do dist/ automaticamente
```

Ou arraste a pasta `dist/` para [netlify.com/drop](https://netlify.com/drop).
