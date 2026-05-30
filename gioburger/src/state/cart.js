// ============================================================
// state/cart.js — Estado reativo do carrinho (sem framework)
// ============================================================

/** @type {Array<{product: object, qty: number}>} */
let items = []

/** @type {Array<Function>} */
const listeners = []

// ── Helpers internos ───────────────────────────────────────

function notify() {
  listeners.forEach(fn => fn(getState()))
}

// ── API pública ────────────────────────────────────────────

export const cart = {
  /** Registra um callback chamado sempre que o carrinho muda */
  subscribe(fn) {
    listeners.push(fn)
    return () => { // retorna unsubscribe
      const idx = listeners.indexOf(fn)
      if (idx > -1) listeners.splice(idx, 1)
    }
  },

  /** Adiciona 1 unidade de um produto */
  add(product) {
    const existing = items.find(i => i.product.id === product.id)
    if (existing) {
      existing.qty++
    } else {
      items.push({ product, qty: 1 })
    }
    notify()
  },

  /** Remove 1 unidade; remove o item se qty chegar a 0 */
  remove(productId) {
    const idx = items.findIndex(i => i.product.id === productId)
    if (idx === -1) return
    items[idx].qty--
    if (items[idx].qty <= 0) items.splice(idx, 1)
    notify()
  },

  /** Remove o item inteiro independente da qty */
  removeAll(productId) {
    items = items.filter(i => i.product.id !== productId)
    notify()
  },

  /** Esvazia o carrinho */
  clear() {
    items = []
    notify()
  },

  /** Snapshot imutável do estado atual */
  getState() {
    return getState()
  },
}

function getState() {
  const snapshot = items.map(i => ({ ...i }))
  const total    = snapshot.reduce((acc, i) => acc + i.product.price * i.qty, 0)
  const count    = snapshot.reduce((acc, i) => acc + i.qty, 0)
  return { items: snapshot, total, count }
}
