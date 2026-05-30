// ============================================================
// components/Cart.js — Drawer deslizante do carrinho
// ============================================================

import { cart } from '../state/cart.js'
import { formatCurrency } from '../utils/format.js'

let drawerEl = null

/**
 * Cria o drawer do carrinho e o injeta no body.
 * Chame uma vez na inicialização.
 */
export function initCart() {
  // Backdrop
  const backdrop = document.createElement('div')
  backdrop.id = 'cart-backdrop'
  backdrop.className = [
    'fixed inset-0 bg-black/60 z-40 opacity-0 pointer-events-none',
    'transition-opacity duration-300',
  ].join(' ')
  backdrop.addEventListener('click', closeCart)
  document.body.appendChild(backdrop)

  // Drawer
  drawerEl = document.createElement('div')
  drawerEl.id = 'cart-drawer'
  drawerEl.className = [
    'fixed bottom-0 left-0 w-full z-50',
    'bg-[var(--color-surface-container-high)] rounded-t-2xl',
    'translate-y-full transition-transform duration-300 ease-out',
    'max-h-[75vh] flex flex-col',
  ].join(' ')

  drawerEl.innerHTML = `
    <div class="flex items-center justify-between px-5 py-4 border-b border-[var(--color-outline-variant)]/30">
      <h2 class="text-lg font-bold text-[var(--color-on-surface)]"
          style="font-family: var(--font-headline)">🛒 Seu Pedido</h2>
      <button id="cart-close"
              class="text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div id="cart-items" class="overflow-y-auto flex-1 px-5 py-4 flex flex-col gap-3"></div>
    <div id="cart-footer" class="px-5 py-4 border-t border-[var(--color-outline-variant)]/30 hidden">
      <div class="flex justify-between items-center mb-4">
        <span class="text-[var(--color-on-surface-variant)] text-sm">Total</span>
        <span id="cart-total" class="text-xl font-bold text-[var(--color-primary)]"
              style="font-family: var(--font-headline)"></span>
      </div>
    </div>
  `

  drawerEl.querySelector('#cart-close').addEventListener('click', closeCart)
  document.body.appendChild(drawerEl)

  // Reage a mudanças no carrinho
  cart.subscribe(renderItems)
}

export function openCart() {
  const backdrop = document.getElementById('cart-backdrop')
  backdrop.classList.remove('opacity-0', 'pointer-events-none')
  drawerEl.classList.remove('translate-y-full')
  document.body.style.overflow = 'hidden'
}

export function closeCart() {
  const backdrop = document.getElementById('cart-backdrop')
  backdrop.classList.add('opacity-0', 'pointer-events-none')
  drawerEl.classList.add('translate-y-full')
  document.body.style.overflow = ''
}

// ── Internos ──────────────────────────────────────────────

function renderItems({ items, total, count }) {
  const container = document.getElementById('cart-items')
  const footer    = document.getElementById('cart-footer')
  const totalEl   = document.getElementById('cart-total')
  if (!container) return

  container.innerHTML = ''

  if (items.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 text-[var(--color-on-surface-variant)]">
        <span class="material-symbols-outlined text-5xl mb-3 opacity-40">shopping_cart</span>
        <p class="text-sm">Seu carrinho está vazio</p>
      </div>
    `
    footer.classList.add('hidden')
    return
  }

  footer.classList.remove('hidden')
  totalEl.textContent = formatCurrency(total)

  items.forEach(({ product, qty }) => {
    const row = document.createElement('div')
    row.className = [
      'flex items-center gap-3 bg-[var(--color-surface-container)] p-3 rounded-xl cart-item-enter',
    ].join(' ')

    row.innerHTML = `
      <img src="${product.image}" alt="${product.name}"
           class="w-14 h-14 rounded-lg object-cover flex-none" />
      <div class="flex-grow min-w-0">
        <p class="font-semibold text-sm text-[var(--color-on-surface)] truncate"
           style="font-family: var(--font-headline)">${product.name}</p>
        <p class="text-xs text-[var(--color-on-surface-variant)]">${formatCurrency(product.price)} /un.</p>
      </div>
      <div class="flex items-center gap-2 flex-none">
        <button class="js-dec w-7 h-7 rounded-full border border-[var(--color-outline-variant)]
                       text-[var(--color-on-surface-variant)] flex items-center justify-center
                       hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
          <span class="material-symbols-outlined text-sm">remove</span>
        </button>
        <span class="text-[var(--color-on-surface)] font-bold w-5 text-center text-sm">${qty}</span>
        <button class="js-inc w-7 h-7 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)]
                       flex items-center justify-center hover:opacity-90 transition-opacity">
          <span class="material-symbols-outlined text-sm">add</span>
        </button>
      </div>
    `

    row.querySelector('.js-inc').addEventListener('click', () => cart.add(product))
    row.querySelector('.js-dec').addEventListener('click', () => cart.remove(product.id))
    container.appendChild(row)
  })
}
