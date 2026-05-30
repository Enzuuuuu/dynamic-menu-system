// ============================================================
// components/CategoryNav.js
// ============================================================

import { restaurant } from '../data/restaurant.js'


export function CategoryNav({ onSelect }) {
  const nav = document.createElement('nav')
  nav.className = 'mt-8 px-5'

  const scroll = document.createElement('div')
  scroll.className = 'flex  gap-4 overflow-x-auto custom-scrollbar pb-2 md:justify-center'

  let activeId = restaurant.categories.find(c => c.default)?.id
                 ?? restaurant.categories[0].id

  function renderButtons() {
    scroll.innerHTML = ''
    restaurant.categories.forEach(cat => {
      const btn = document.createElement('button')
      const isActive = cat.id === activeId

      btn.className = [
        'flex-none px-6 py-2.5 rounded-full text-xs font-bold tracking-widest',
        'transition-all duration-200',
        isActive
          ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)]'
          : 'bg-[var(--color-surface-container)] text-[var(--color-on-surface)] hover:opacity-80',
      ].join(' ')

      btn.textContent = cat.label
      btn.style.fontFamily = 'var(--font-body)'

      btn.addEventListener('click', () => {
        activeId = cat.id
        renderButtons()
        onSelect(cat.id)
      })

      scroll.appendChild(btn)
    })
  }

  renderButtons()
  nav.appendChild(scroll)
  return nav
}
