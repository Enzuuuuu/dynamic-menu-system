// ============================================================
// components/ProductCard.js
// ============================================================

import { formatCurrency } from '../utils/format.js'
import { cart } from '../state/cart.js'

export function ProductCard({ product, variant = 'list' }) {
  if (variant === 'highlight') return buildHighlight(product)
  if (variant === 'grid')      return buildGrid(product)
  return buildList(product)
}

// ── Highlight: card grande do carrossel (mobile) ──────────

function buildHighlight(product) {
  const el = document.createElement('div')
  el.className = [
    'flex-none w-[280px] bg-[var(--color-surface-container)]',
    'border border-[var(--color-outline-variant)]/20 rounded-xl overflow-hidden',
  ].join(' ')

  el.innerHTML = `
    <div class="relative h-44 overflow-hidden">
      <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
    </div>
    <div class="p-4">
      <h4 class="font-semibold text-[var(--color-on-surface)] truncate"
          style="font-family: var(--font-headline)">${product.name}</h4>
      <p class="text-[var(--color-on-surface-variant)] text-sm line-clamp-1 mt-1">${product.description}</p>
      <div class="flex justify-between items-center mt-3">
        <span class="font-bold text-lg text-[var(--color-primary)]"
              style="font-family: var(--font-headline)">${formatCurrency(product.price)}</span>
        <button class="js-add bg-[var(--color-primary)] text-[var(--color-on-primary)]
                       w-10 h-10 rounded-full flex items-center justify-center
                       hover:opacity-90 transition-opacity duration-200">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  `

  el.querySelector('.js-add').addEventListener('click', () => cart.add(product))
  return el
}

// ── List: linha horizontal da lista (mobile) ──────────────

function buildList(product) {
  const el = document.createElement('div')
  el.className = [
    'flex bg-[var(--color-surface-container-low)] p-3 rounded-xl',
    'border border-[var(--color-outline-variant)]/20',
    'hover:border-[var(--color-outline-variant)]/40 transition-colors duration-200',
  ].join(' ')

  el.innerHTML = `
    <div class="w-24 h-24 rounded-lg overflow-hidden flex-none">
      <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
    </div>
    <div class="ml-4 flex flex-col justify-between flex-grow">
      <div>
        <h4 class="font-semibold text-[var(--color-on-surface)]"
            style="font-family: var(--font-headline)">${product.name}</h4>
        <p class="text-[var(--color-on-surface-variant)] text-sm line-clamp-2 mt-1">${product.description}</p>
      </div>
      <div class="flex justify-between items-center mt-2">
        <span class="font-bold text-[var(--color-primary)]"
              style="font-family: var(--font-headline)">${formatCurrency(product.price)}</span>
        <button class="js-add w-8 h-8 rounded-full border border-[var(--color-primary)]
                       text-[var(--color-primary)] flex items-center justify-center
                       hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]
                       transition-colors duration-200">
          <span class="material-symbols-outlined text-sm">add</span>
        </button>
      </div>
    </div>
  `

  el.querySelector('.js-add').addEventListener('click', () => cart.add(product))
  return el
}

// ── Grid: card vertical do desktop (novo) ─────────────────

function buildGrid(product) {
  const el = document.createElement('div')
  el.className = [
    'flex flex-col bg-[var(--color-surface-container)]',
    'border border-[var(--color-outline-variant)]/20 rounded-xl overflow-hidden',
    'hover:border-[var(--color-outline-variant)]/50 transition-colors duration-200 group',
  ].join(' ')

  el.innerHTML = `
    <div class="relative h-48 overflow-hidden flex-none">
      <img src="${product.image}" alt="${product.name}"
           class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      ${product.badge ? `
        <div class="absolute top-3 right-3 bg-[var(--color-primary)] text-[var(--color-on-primary)]
                    text-[10px] font-bold tracking-widest px-2 py-1 rounded"
             style="font-family: var(--font-body)">
          ${product.badge}
        </div>` : ''}
    </div>
    <div class="p-5 flex flex-col flex-grow">
      <h4 class="font-semibold text-[var(--color-on-surface)] mb-2"
          style="font-family: var(--font-headline)">${product.name}</h4>
      <p class="text-[var(--color-on-surface-variant)] text-sm line-clamp-2 flex-grow">${product.description}</p>
      <div class="flex items-center justify-between mt-4">
        <span class="font-bold text-lg text-[var(--color-primary)]"
              style="font-family: var(--font-headline)">${formatCurrency(product.price)}</span>
        <button class="js-add bg-[var(--color-primary)] text-[var(--color-on-primary)]
                       w-10 h-10 rounded-full flex items-center justify-center
                       hover:opacity-90 active:scale-90 transition-all duration-200">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  `

  el.querySelector('.js-add').addEventListener('click', () => cart.add(product))
  return el
}