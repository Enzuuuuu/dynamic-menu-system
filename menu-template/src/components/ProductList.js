// ============================================================
// components/ProductList.js
// ============================================================

import { restaurant } from '../data/restaurant.js'
import { ProductCard } from './ProductCard.js'
import { CategoryNav } from './CategoryNav.js'

const HIGHLIGHTS_LIMIT = 5   // máx de cards no carrossel de destaques
const GROUP_SIZE       = 3   // itens por coluna no carrossel de produtos

export function ProductList({ category }) {
  const wrapper = document.createElement('div')

  // ── Destaques (máx HIGHLIGHTS_LIMIT itens) ────────────────
  wrapper.appendChild(buildHighlights())

  // ── Nav horizontal entre as seções ───────────────────────
  wrapper.appendChild(CategoryNav({
    onSelect: (catId) => updateProductList(catId),
  }))

  // ── Lista/carrossel de produtos ───────────────────────────
  const listSection = document.createElement('section')
  listSection.className = 'mt-8'
  listSection.id = 'product-list-section'
  wrapper.appendChild(listSection)

  renderList(listSection, category)

  return wrapper
}

export function updateProductList(categoryId) {
  const section = document.getElementById('product-list-section')
  if (section) renderList(section, categoryId)
}

// ── Internos ──────────────────────────────────────────────

function buildHighlights() {
  
  const section = document.createElement('section')

  section.className = 'mt-8'

  section.innerHTML = `
    <div class="px-5 flex justify-between items-end mb-4">
      <h3 class="text-xl font-semibold text-[var(--color-on-surface)]"
          style="font-family: var(--font-headline)">Destaques</h3>
      
    </div>
  `
 
  const higthligths = document.createElement('div')
  higthligths.className = 'flex gap-4 overflow-x-auto px-5 custom-scrollbar pb-4 md: flex md:justify-center'
  const scroll = document.createElement('div')
  scroll.className = 'flex gap-4 overflow-x-auto px-5 custom-scrollbar pb-4'

  restaurant.highlights
    .map(id => restaurant.products.find(product => product.id === id))
    .filter(Boolean)
    .slice(0, HIGHLIGHTS_LIMIT)
    .forEach(product => {
      scroll.appendChild(ProductCard({ product, variant: 'highlight' }))
    })

  higthligths.appendChild(scroll)
  section.appendChild(higthligths)

  

  return section
}

function checkIfOpen() {
  const now    = new Date()
  const day    = now.getDay()
  const hour   = now.getHours()
  const [closeH] = restaurant.closingHour.split(':').map(Number)
  return restaurant.openDays.includes(day) && hour >= 18 && hour < closeH
}

function renderList(section, categoryId) {
  const filtered = restaurant.products.filter(p => p.category === categoryId)
  const catLabel = restaurant.categories.find(c => c.id === categoryId)?.label ?? ''

  section.innerHTML = `
    <h3 class="px-5 text-xl font-semibold text-[var(--color-on-surface)] mb-4"
        style="font-family: var(--font-headline)">
      ${catLabel}
    </h3>
  `

  // ── Vazio ─────────────────────────────────────────────────
  if (filtered.length === 0) {
    const empty = document.createElement('p')
    empty.className = 'text-[var(--color-on-surface-variant)] text-sm text-center py-8'
    empty.textContent = 'Nenhum produto nesta categoria ainda.'
    section.appendChild(empty)
    return
  }

  // ── ≤ GROUP_SIZE → lista vertical simples ─────────────────
  if (filtered.length <= GROUP_SIZE) {
    const list = document.createElement('div')
    list.className = 'flex flex-col gap-4 px-5'
    filtered.forEach(product => {
      list.appendChild(ProductCard({ product, variant: 'list' }))
    })
    section.appendChild(list)
    return
  }

  // ── > GROUP_SIZE → carrossel de colunas (3 itens/coluna) ──
  const scroll = document.createElement('div')
  scroll.className = 'flex gap-4 overflow-x-auto px-5 custom-scrollbar pb-4'

  chunkArray(filtered, GROUP_SIZE).forEach(chunk => {
    const col = document.createElement('div')
    col.className = 'flex-none w-[calc(100vw-60px)] max-w-[420px] flex flex-col gap-4'

    chunk.forEach(product => {
      col.appendChild(ProductCard({ product, variant: 'list' }))
    })

    scroll.appendChild(col)
  })

  section.appendChild(scroll)
}

function chunkArray(arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}