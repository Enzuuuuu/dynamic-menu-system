// ============================================================
// 🟡 config/theme.js — Ajuste as cores por cliente (opcional)
// ============================================================

export const theme = {
  // Cor primária (botões, preços, destaques)
  primary:           '#f2ca50',
  onPrimary:         '#3c2f00',

  // Superfícies (fundo, cards)
  background:        '#121414',
  surface:           '#121414',
  surfaceContainer:  '#1e2020',
  surfaceContainerLow:  '#1a1c1c',
  surfaceContainerHigh: '#282a2b',

  // Textos
  onSurface:         '#e2e2e2',
  onSurfaceVariant:  '#d0c5af',
  outline:           '#99907c',
  outlineVariant:    '#4d4635',

  // Tipografia
  fontHeadline: "'Sora', sans-serif",
  fontBody:     "'Inter', sans-serif",
}

/**
 * Injeta as variáveis CSS no <html> para que os componentes
 * possam usar var(--color-primary), etc.
 */
export function applyTheme() {
  const root = document.documentElement
  root.classList.add('dark')

  const map = {
    '--color-primary':                theme.primary,
    '--color-on-primary':             theme.onPrimary,
    '--color-background':             theme.background,
    '--color-surface':                theme.surface,
    '--color-surface-container':      theme.surfaceContainer,
    '--color-surface-container-low':  theme.surfaceContainerLow,
    '--color-surface-container-high': theme.surfaceContainerHigh,
    '--color-on-surface':             theme.onSurface,
    '--color-on-surface-variant':     theme.onSurfaceVariant,
    '--color-outline':                theme.outline,
    '--color-outline-variant':        theme.outlineVariant,
    '--font-headline':                theme.fontHeadline,
    '--font-body':                    theme.fontBody,
  }

  for (const [key, val] of Object.entries(map)) {
    root.style.setProperty(key, val)
  }
}
