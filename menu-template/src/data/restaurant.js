import images from '../assets/images.js'

export const restaurant = {
  // — Informações gerais —
  name:        "smoky",
  fullName:    "Smoky Grill Burger",
  city:        'Recife - PE',
  address:     'Av. Boa Viagem, 500 - Recife',
  phone:       '5581999999999',
  hours:       'Seg–Dom, 17h às 23h',
  closingHour: '23:00',
  openDays:    [1, 2, 3, 4, 5, 6, 0],

  // — Imagens —
  logo: images.logo,
  banner: images.banner,

  // — Categorias (mesma ordem do menu) —
  categories: [
    { id: 'burgers',    label: '🍔 Hambúrgueres', default: true },
    { id: 'combos',     label: '🍟 Combos' },
    { id: 'drinks',     label: '🥤 Bebidas' },
    { id: 'desserts',   label: '🍦 Sobremesas' },
  ],

  // — Destaques (carrossel horizontal) —
  highlights: [
    'p8',
    'p5',
    'p21',
    'p22',
    'p23',
  ],

  // — Produtos por categoria —
  products: [
    // ── Hambúrgueres ──
    {
      id: 'p1',
      category: 'burgers',
      name: 'Smoky Classic',
      description: 'Pão brioche, burger 180g, cheddar cremoso e bacon crocante.',
      price: 29.90,
      image: '',
    },
    {
      id: 'p2',
      category: 'burgers',
      name: 'Cheese Salad',
      description: 'Burger artesanal, alface americana, tomate e molho da casa.',
      price: 31.90,
      image: '',
    },
    {
      id: 'p3',
      category: 'burgers',
      name: 'Blue Smoke',
      description: 'Burger 180g, queijo gorgonzola, cebola caramelizada e rúcula.',
      price: 37.90,
      image: '',
    },
    {
      id: 'p9',
      category: 'burgers',
      name: 'Double Cheddar',
      description: 'Dois burgers smash, cheddar extra e cebola crispy.',
      price: 39.90,
      image: '',
    },
    {
      id: 'p10',
      category: 'burgers',
      name: 'Bacon Monster',
      description: 'Burger artesanal, muito bacon e molho especial defumado.',
      price: 41.90,
      image: '',
    },
    {
      id: 'p11',
      category: 'burgers',
      name: 'Fire Burger',
      description: 'Burger apimentado com jalapeños e molho chipotle.',
      price: 38.90,
      image: '',
    },
    {
      id: 'p12',
      category: 'burgers',
      name: 'California Burger',
      description: 'Burger bovino, avocado, tomate fresco e molho verde.',
      price: 39.90,
      image: '',
    },
    {
      id: 'p13',
      category: 'burgers',
      name: 'Veggie Grill',
      description: 'Hambúrguer vegetal, queijo, rúcula e molho pesto.',
      price: 34.90,
      image: '',
    },
    {
      id: 'p14',
      category: 'burgers',
      name: 'BBQ House',
      description: 'Burger 180g, onion rings e barbecue artesanal.',
      price: 42.90,
      image: '',
    },
    {
      id: 'p15',
      category: 'burgers',
      name: 'Mexican Hot',
      description: 'Burger com cheddar picante, chipotle e cebola crispy.',
      price: 40.90,
      image: '',
    },
    {
      id: 'p16',
      category: 'burgers',
      name: 'Truffle Burger',
      description: 'Burger premium, queijo suíço e creme trufado.',
      price: 46.90,
      image: '',
    },
    {
      id: 'p17',
      category: 'burgers',
      name: 'Prime Angus',
      description: 'Burger Angus, queijo prato, bacon e maionese especial.',
      price: 47.90,
      image: '',
    },
    {
      id: 'p18',
      category: 'burgers',
      name: 'Green Burger',
      description: 'Burger bovino, avocado e molho de ervas.',
      price: 40.90,
      image: '',
    },
    {
      id: 'p19',
      category: 'burgers',
      name: 'Blue Cheese Deluxe',
      description: 'Burger artesanal, gorgonzola e cebola caramelizada.',
      price: 43.90,
      image: '',
    },
    {
      id: 'p20',
      category: 'burgers',
      name: 'Titan Burger',
      description: 'Três carnes, cheddar duplo, bacon e molho especial.',
      price: 54.90,
      image: '',
    },

    // ── Combos ──
    {
      id: 'p4',
      category: 'combos',
      name: 'Combo Classic',
      description: 'Smoky Classic + fritas + refrigerante 350ml.',
      price: 44.90,
      image: '',
    },
    {
      id: 'p5',
      category: 'combos',
      name: 'Combo BBQ',
      description: 'BBQ House + onion rings + refrigerante.',
      price: 49.90,
      image: '',
    },
    {
      id: 'p21',
      category: 'combos',
      name: 'Combo Crispy Chicken',
      description: 'Chicken burger + fritas + refrigerante.',
      price: 46.90,
      image: '',
    },
    {
      id: 'p22',
      category: 'combos',
      name: 'Combo Veggie',
      description: 'Veggie Grill + batata rústica + suco natural.',
      price: 45.90,
      image: '',
    },
    {
      id: 'p23',
      category: 'combos',
      name: 'Combo Família',
      description: '2 burgers, frita grande e 2 refrigerantes.',
      price: 89.90,
      image: '',
    },

    // ── Bebidas ──
    {
      id: 'p6',
      category: 'drinks',
      name: 'Refrigerante Lata',
      description: 'Coca-Cola, Guaraná ou Sprite.',
      price: 6.50,
      image: '',
    },
    {
      id: 'p7',
      category: 'drinks',
      name: 'Suco Natural 500ml',
      description: 'Laranja, limão ou maracujá.',
      price: 10.90,
      image: '',
    },

    // ── Sobremesas ──
    {
      id: 'p8',
      category: 'desserts',
      name: 'Brownie Supreme',
      description: 'Brownie artesanal com sorvete e calda de chocolate.',
      price: 16.90,
      image: '',
    },
  ],
}