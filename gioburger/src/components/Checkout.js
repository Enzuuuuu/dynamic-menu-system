// ============================================================
// components/Checkout.js — Barra inferior com envio de pedido
// ============================================================

import { cart } from '../state/cart.js'
import { restaurant } from '../data/restaurant.js'
import { buildOrderMessage, sendToWhatsApp } from '../utils/whatsapp.js'
import { openCart } from './Cart.js'
import { checkIfOpen } from './Hero.js'

/**
 * Cria a BottomNavBar fixa com botão de carrinho e enviar pedido.
 * @returns {HTMLElement}
 */
export function Checkout() {
  const nav = document.createElement('nav')
  nav.className = [
    'fixed bottom-0 left-0 w-full z-50',
    'bg-[var(--color-surface-container)] border-t border-[var(--color-outline-variant)]/30',
    'flex justify-between items-center px-5 py-4 gap-4',
  ].join(' ')

  nav.innerHTML = `
    <button id="btn-cart"
            class="relative flex flex-row items-center gap-2 text-[var(--color-on-surface)]
                   px-4 py-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer">
      <span class="material-symbols-outlined">shopping_cart</span>
      <span class="text-xs font-bold tracking-widest" style="font-family: var(--font-body)">CARRINHO</span>
      <span id="cart-badge"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold
                   rounded-full w-5 h-5 flex items-center justify-center hidden">
        0
      </span>
    </button>

    <button id="btn-send"
            class="flex flex-row items-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)]
                   px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer
                   disabled:opacity-40 disabled:cursor-not-allowed">
      <span class="material-symbols-outlined">send</span>
      <span class="text-xs font-bold tracking-widest" style="font-family: var(--font-body)">ENVIAR PEDIDO</span>
    </button>
  `

  const badge   = nav.querySelector('#cart-badge')
  const btnSend = nav.querySelector('#btn-send')

  // Abre drawer
  nav.querySelector('#btn-cart').addEventListener('click', openCart)

  // Envia pedido
  btnSend.addEventListener('click', () => {
    const { items, total, count } = cart.getState()
    if (!checkIfOpen()) {
      alert('Ops! O restaurante está fechado no momento. Por favor, tente novamente durante o horário de funcionamento.')
      return
    }
    if (count === 0) {
      openCart()
      return
    }
    const msg = buildOrderMessage(items, total, restaurant.name)
    sendToWhatsApp(restaurant.phone, msg)
  })

  // Atualiza badge
  cart.subscribe(({ count }) => {
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : count
      badge.classList.remove('hidden')
      badge.classList.add('badge-pulse')
      setTimeout(() => badge.classList.remove('badge-pulse'), 300)
    } else {
      badge.classList.add('hidden')
    }
  })

  return nav
}
