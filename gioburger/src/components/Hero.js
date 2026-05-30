// ============================================================
// components/Hero.js
// ============================================================

import { restaurant } from '../data/restaurant.js'

export function Hero() {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches
  return isDesktop ? buildDesktop() : buildMobile()
}

// ── Mobile (existente) ────────────────────────────────────

function buildMobile() {
  const wrapper = document.createElement('div')

  const bannerSection = document.createElement('section')
  bannerSection.className = 'relative w-full h-64 md:h-80 overflow-hidden'
  bannerSection.innerHTML = `
    <img src="${restaurant.banner}"
         alt="Banner"
         class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/60 to-transparent"></div>
    <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div class="w-24 h-24 rounded-full border-4 border-[var(--color-background)] bg-[var(--color-surface)] overflow-hidden">
        <img src="${restaurant.logo}" alt="Logo ${restaurant.name}" class="w-full h-full object-cover" />
      </div>
    </div>
  `

  const infoSection = document.createElement('section')
  infoSection.className = 'mt-16 px-5 text-center'

  const isOpen = checkIfOpen()
  const statusBadge = isOpen
    ? `<span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
       <span class="text-[var(--color-primary)] text-xs font-bold tracking-widest">
         ABERTO AGORA • FECHA ÀS ${restaurant.closingHour}
       </span>`
    : `<span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
       <span class="text-red-400 text-xs font-bold tracking-widest">FECHADO AGORA</span>`

  infoSection.innerHTML = `
    <h2 class="text-2xl font-bold text-[var(--color-on-surface)]"
        style="font-family: var(--font-headline)">
      ${restaurant.fullName}
    </h2>
    <div class="flex items-center justify-center gap-2 mt-2 text-[var(--color-on-surface-variant)] text-sm">
      <span class="material-symbols-outlined text-sm">location_on</span>
      <span>${restaurant.city}</span>
    </div>
    <div class="mt-4 inline-flex items-center gap-2 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]/30 px-4 py-1.5 rounded-full">
      ${statusBadge}
    </div>
  `

  wrapper.appendChild(bannerSection)
  wrapper.appendChild(infoSection)
  return wrapper
}

// ── Desktop (novo) ────────────────────────────────────────

function buildDesktop() {
  const isOpen = checkIfOpen()

  const statusBadge = isOpen
    ? `<span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
       <span class="text-[var(--color-primary)] text-xs font-bold tracking-widest">
         ABERTO AGORA • FECHA ÀS ${restaurant.closingHour}
       </span>`
    : `<span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
       <span class="text-red-400 text-xs font-bold tracking-widest">FECHADO AGORA</span>`

  const section = document.createElement('section')
  section.className = 'relative w-full h-[60vh] flex items-center justify-center overflow-hidden'

  section.innerHTML = `
    <div class="absolute inset-0 z-0">
      <img src="${restaurant.banner}"
           alt="Banner"
           class="w-full h-full object-cover opacity-60" />
      <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent"></div>
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <div class="relative z-10 text-center px-5 max-w-4xl">
      <h2 class="text-5xl font-extrabold tracking-tight text-[var(--color-primary)] mb-4 drop-shadow-lg"
          style="font-family: var(--font-headline)">
        ${restaurant.fullName.toUpperCase()}
      </h2>
      <p class="text-[var(--color-on-surface)] text-base max-w-2xl mx-auto mb-6"
         style="font-family: var(--font-body)">
        ${restaurant.city} • ${restaurant.hours}
      </p>
      <div class="inline-flex items-center gap-2 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]/30 px-4 py-1.5 rounded-full mb-8">
        ${statusBadge}
      </div>
      <br/>
      <button class="bg-[var(--color-primary)] text-[var(--color-on-primary)] font-bold text-sm tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
              style="font-family: var(--font-body)"
              onclick="document.getElementById('product-list-section').scrollIntoView({ behavior: 'smooth' })">
        VER CARDÁPIO COMPLETO
      </button>
    </div>
  `

  return section
}

// ── Shared ────────────────────────────────────────────────

export function checkIfOpen() {
  const now     = new Date()
  const day     = now.getDay()
  const hour    = now.getHours()
  const [closeH] = restaurant.closingHour.split(':').map(Number)
  return restaurant.openDays.includes(day) && hour >= 18 && hour < closeH
}