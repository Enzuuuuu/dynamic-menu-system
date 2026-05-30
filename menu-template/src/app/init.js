// ============================================================
// app/init.js — Orquestra todos os componentes
// ============================================================

import { applyTheme } from '../config/theme.js'
import { restaurant } from '../data/restaurant.js'

import { Header }      from '../components/Header.js'
import { Hero }        from '../components/Hero.js'
import { CategoryNav } from '../components/CategoryNav.js'
import { ProductList, updateProductList } from '../components/ProductList.js'
import { initCart }    from '../components/Cart.js'
import { Checkout }    from '../components/Checkout.js'

export function init() {
  // 1. Aplica tema CSS
  applyTheme()

  // 2. Atualiza title da página
  document.title = `${restaurant.name} | Cardápio`

  const app = document.getElementById('app')
  app.className = 'bg-[var(--color-background)] text-[var(--color-on-surface)] overflow-x-hidden min-h-screen'

  // 3. Categoria padrão
  const defaultCategory = restaurant.categories.find(c => c.default)?.id
                          ?? restaurant.categories[0].id

  // 4. Monta a página
  const header = Header({ title: restaurant.name, logo: restaurant.logo })

  const main = document.createElement('main')
  main.className = 'pb-32'
  main.appendChild(Hero())
  main.appendChild(ProductList({ category: defaultCategory }))
  main.appendChild(buildWhatsAppFab())
  main.appendChild(buildFooter())

  app.appendChild(header)
  app.appendChild(main)
  app.appendChild(Checkout())

  // 5. Inicializa o drawer do carrinho
  initCart()
}

// ── Helpers ───────────────────────────────────────────────

function buildWhatsAppFab() {
  const a = document.createElement('a')
  a.href = `https://wa.me/${restaurant.phone}`
  a.target = '_blank'
  a.className = [
    'fixed bottom-24 right-5 bg-[#25D366] text-white',
    'w-14 h-14 rounded-full flex items-center justify-center',
    'hover:opacity-90 transition-opacity z-40 shadow-lg',
  ].join(' ')
  a.innerHTML = `
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.158.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.419-.101.824z"/>
    </svg>
  `
  return a
}

function buildFooter() {
  const footer = document.createElement('footer')
  footer.className = [
    'bg-[var(--color-surface-container-lowest)] flex flex-col items-center text-center',
    'p-8 border-t border-[var(--color-outline-variant)]/10 pb-32 w-full mt-8',
  ].join(' ')

  footer.innerHTML = `
    <div class="text-xl font-semibold text-secondary mb-4"
         style="font-family: var(--font-headline)">${restaurant.name.toUpperCase()}</div>
    <div class="flex flex-col gap-2 text-sm text-[var(--color-on-surface-variant)]">
      <span>${restaurant.address}</span>
      <span>${restaurant.hours}</span>
    </div>
    <p class="mt-6 text-[10px] text-[var(--color-on-surface-variant)]/50">
      © ${new Date().getFullYear()} ${restaurant.name}. Todos os direitos reservados.
    </p>
  `
  return footer
}
