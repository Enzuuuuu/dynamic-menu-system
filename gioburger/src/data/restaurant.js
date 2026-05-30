
export const restaurant = {
  // — Informações gerais —
  name:        "francisco",
  fullName:    "francisco's burger house",
  city:        'João Pessoa - PB',
  address:     'Rua das Brasas, 123 - João Pessoa',
  phone:       '556892026093', // WhatsApp (sem + e sem espaço)
  hours:       'Ter–Dom, 18h às 23h',
  closingHour: '23:00',
  openDays:    [2, 3, 4, 5, 6, 0], // 0 = Dom, 1 = Seg ...

  // — Imagens —
  logo:   'https://pps.whatsapp.net/v/t61.24694-24/587852841_1488409208925183_7006411952721628109_n.jpg?ccb=11-4&oh=01_Q5Aa4gHWDyJ3Rt6MLZ8rScrL0OCxWFS6S0rCxEHseodhkxwNFQ&oe=6A236F3F&_nc_sid=5e03e0&_nc_cat=110',
  banner: 'https://assets.unileversolutions.com/recipes-v2/99439.jpg',

  // — Categorias (mesma ordem do menu) —
  categories: [
    { id: 'burgers',    label: '🍔 Hambúrgueres', default: true },
    { id: 'combos',     label: '🍟 Combos' },
    { id: 'drinks',     label: '🥤 Bebidas' },
    { id: 'desserts',   label: '🍦 Sobremesas' },
  ],

  // — Destaques (carrossel horizontal) —
  // IDs de produtos que aparecem como destaques
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
      id:          'p1',
      category:    'burgers',
      name:        'Gb Clássico',
      description: 'Pão brioche, blend 180g, queijo cheddar e bacon artesanal.',
      price:       32.00,
      image:       'https://lh3.googleusercontent.com/aida/ADBb0ujqerseCtZiZ0KkfluxrY52EpvdCRBSwoBo_PqkAMHOOe3iqsvtBf7-XitmvRzy5VGsnvb-AnfY3eqbKARPiNETEqutANtut7mC8jdR32GTeV9RK8CNZruHTITkMYDu8gIJKlt6jp3ktSq70Sbm14V7yb3yaE9xLEX037_ekIy-3fPtAkGMjk8dpkb1ttU0UniYirK42OciChTcZ2EZgPwBEzVvJvBjOiUdI8dY-fJCPjgLf0A9BujX6Q',
    },
    {
      id:          'p2',
      category:    'burgers',
      name:        'Gb Salada',
      description: 'Blend bovino, alface, tomate, cebola roxa e molho especial.',
      price:       34.00,
      image:       'https://lh3.googleusercontent.com/aida/ADBb0ujtea63cJ4TlcrORjczxihIawmvWf92K1QLvclZglcyh4uMXCd0Sl4r4wp0-rjrrBDQtQe_3FmHga4RrF1JC8tt4OkA8CMF4GfClWjss3sU7JSv44xEj94jFdwgrQPm8N0ww9SzB-fdTnJ33RKLxfqP8Lc7pyo7oC6wdvbJF_VUQiV2MMfOD31xnG26VmW-Xxa07y_wlT15XFOPCRsGaJiesUmze59yQPtRpzaugeuF6dQ9DDgZnSHxmOg',
    },
    {
      id:          'p3',
      category:    'burgers',
      name:        'Gb Gorgonzola',
      description: 'Blend premium, creme de gorgonzola, mel e rúcula fresca.',
      price:       36.00,
      image:       'https://lh3.googleusercontent.com/aida/ADBb0uh8TfSqIumcOWQxLM74DR-BS3iV8Jtre_xIrHlkgNK2f7EUoqz3v7GSKiFfv6sNXHxu5TIFIJrOe6ColBchzRabvz-OtU06JadAQGKB9BCPFtxUWYMA-GQYau3G16GgiD8OoTaArJlHawBakSEkVJSlgbRcCpo8rzzK23n1Aygv6HKl_xljCyS668UjI0nhA6W_RxO1YZDxwAGhqoKF8ICdc0_eENA94LV0KNHMzygXWn2kBhKmJiSzCts',
    },
    {
      id:          'p9',
      category:    'burgers',
      name:        'Gb Duplo Cheddar',
      description: 'Dois burgers com cheddar, cebola crocante e barbecue especial.',
      price:       42.00,
      image:       'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&q=80',
    },
    {
      id:          'p10',
      category:    'burgers',
      name:        'Gb Bacon Supreme',
      description: 'Blend artesanal, bacon crocante, queijo e molho especial.',
      price:       38.50,
      image:       'https://images.unsplash.com/photo-1515456799897-6f6d90d4d3e2?w=800&q=80',
    },
    {
      id:          'p11',
      category:    'burgers',
      name:        'Gb Jalapeño',
      description: 'Hambúrguer apimentado com jalapeños, queijo e maionese de alho.',
      price:       39.90,
      image:       'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
    },
    {
      id:          'p12',
      category:    'burgers',
      name:        'Gb California',
      description: 'Pão brioche, avocado, tomate, alface e maionese fresca.',
      price:       40.00,
      image:       'https://images.unsplash.com/photo-1514516870926-2f9f9b6786b9?w=800&q=80',
    },
    {
      id:          'p13',
      category:    'burgers',
      name:        'Gb Vegetariano',
      description: 'Hambúrguer de grão-de-bico, rúcula, queijo e molho pesto.',
      price:       37.90,
      image:       'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    },
    {
      id:          'p14',
      category:    'burgers',
      name:        'Gb Barbecue',
      description: 'Burger caramelizado, onion rings e molho barbecue artesanal.',
      price:       41.50,
      image:       'https://images.unsplash.com/photo-1499028344345-1661041ccea0?w=800&q=80',
    },
    {
      id:          'p15',
      category:    'burgers',
      name:        'Gb Picante',
      description: 'Blend ardente com pimenta chipotle, queijo pepper jack e cebola frita.',
      price:       40.90,
      image:       'https://images.unsplash.com/photo-1499965150380-3d7e9d1a5df1?w=800&q=80',
    },
    {
      id:          'p16',
      category:    'burgers',
      name:        'Gb Trufado',
      description: 'Blend premium, cogumelos, creme de trufa e queijo suíço.',
      price:       45.90,
      image:       'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80',
    },
    {
      id:          'p17',
      category:    'burgers',
      name:        'Gb Picanha Premium',
      description: 'Picanha suculenta, queijo prato, bacon e maionese especial.',
      price:       46.90,
      image:       'https://images.unsplash.com/photo-1516684669134-9ce80b220c5e?w=800&q=80',
    },
    {
      id:          'p18',
      category:    'burgers',
      name:        'Gb Avocado',
      description: 'Pão brioche, blend bovino, avocado, molho de ervas e alface crocante.',
      price:       41.00,
      image:       'https://images.unsplash.com/photo-1437260796702-2f6fc5cf9a75?w=800&q=80',
    },
    {
      id:          'p19',
      category:    'burgers',
      name:        'Gb Blue Cheese',
      description: 'Hambúrguer de carne, queijo gorgonzola, cebola caramelizada e rúcula.',
      price:       44.00,
      image:       'https://images.unsplash.com/photo-1491568996545-4ac365d13bc0?w=800&q=80',
    },
    {
      id:          'p20',
      category:    'burgers',
      name:        'Gb Triplo',
      description: 'Três hambúrgueres, queijo duplo, bacon crocante e molho especial.',
      price:       58.00,
      image:       'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80',
    },
    // ── Combos ──
    {
      id:          'p4',
      category:    'combos',
      name:        'Combo Sertanejo',
      description: 'Hambúrguer de picanha + Fritas + Refri 500ml.',
      price:       54.90,
      image:       'https://lh3.googleusercontent.com/aida/ADBb0ujBhepKTQZjiwWckB3oJKoQLhxBmrxkf8bNy-Z2vsURwhNeMu0lFvinzXYhxCVyWwijYxoIgV6pVRPmyEccOS0VOajC7hFz36BOcqnNzrJsGFp7y9WAD15QEGcgCX-JHP109QzYFt9EndDNFO8hiTp0_7EfZY9P3zlMDngTcnCs4QQgu4_CxYmXCc6VQBiGg5pNMt79pZNjSPJjQNo65-ivN85X-3Kuk6b_08kh3qPYr3piYfzxXHwnD_s',
    },
    {
      id:          'p5',
      category:    'combos',
      name:        'Combo Barbecue',
      description: 'Burger defumado + Anéis de Cebola + Refri.',
      price:       58.00,
      image:       'https://lh3.googleusercontent.com/aida/ADBb0uiK1qZj1lfojpOli4pXIjFAL-oLBFLq2_lCWE4rInQGOnnu8bOcxaC56gIyYLuM_ING7SQWHGJNakQzXbdk0PySvy_qplB_DAZdDNlDIWmhPCvYp3wydogKVr9tbGbKAelx3xfTLSDRWQuG_B5oIsoqOMW7fwv9Zrg9PRVUWNpBsxgIMYlwQWUfuK6HTHKJReN5QLwbZmb5iOtrWhfY0J6GqsnhRmpe8j2PUi193C-mdvzDTtZXd6IwlXg',
    },
    {
      id:          'p21',
      category:    'combos',
      name:        'Combo Chicken Crunch',
      description: 'Crispy chicken burger + fritas + refri 500ml.',
      price:       56.50,
      image:       'https://images.unsplash.com/photo-1562967916-eb82221dfb59?w=800&q=80',
    },
    {
      id:          'p22',
      category:    'combos',
      name:        'Combo Veggie Salad',
      description: 'Burger vegetariano + salada + suco natural.',
      price:       52.00,
      image:       'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    },
    {
      id:          'p23',
      category:    'combos',
      name:        'Combo Triplo',
      description: 'Triplo burger + fritas grande + 2 refri 500ml.',
      price:       115.00,
      image:       'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80',
    },
    // ── Bebidas ──
    {
      id:          'p6',
      category:    'drinks',
      name:        'Refri Lata 350ml',
      description: 'Coca-Cola, Guaraná ou Sprite bem gelada.',
      price:       7.00,
      image:       'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&q=80',
    },
    {
      id:          'p7',
      category:    'drinks',
      name:        'Suco Natural 500ml',
      description: 'Laranja, maracujá ou açaí. Feito na hora.',
      price:       12.00,
      image:       'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&q=80',
    },
    // ── Sobremesas ──
    {
      id:          'p8',
      category:    'desserts',
      name:        'Brownie com Sorvete',
      description: 'Brownie quentinho + bola de baunilha + calda de chocolate.',
      price:       18.00,
      image:       'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=300&q=80',
    },
    
  ],
}
