// ============================================================
// components/Header.js
// ============================================================

export function Header({ title, logo }) {
  const el = document.createElement('header')
  el.className = [
    'bg-[var(--color-surface)]/95',
    'border-b border-[var(--color-outline-variant)]/30',
    'top-0 sticky flex justify-between items-center',
    'w-full px-5 py-4 z-50',
  ].join(' ')

  el.innerHTML = `
    <div class="w-8"></div>

    <div class="flex items-center gap-3">
      <img src="${logo}"
           alt="Logo ${title}"
           class="hidden md:block w-9 h-9 rounded-full object-cover" />
      <h1 class="font-bold text-xl tracking-tight text-[var(--color-primary)]"
          style="font-family: var(--font-headline)">
        ${title.toUpperCase()}
      </h1>
    </div>

    <div class="w-8"></div>
  `

  return el
}