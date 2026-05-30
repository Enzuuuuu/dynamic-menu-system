// ============================================================
// utils/whatsapp.js — Monta e envia pedido via WhatsApp
// ============================================================

import { formatCurrency } from './format.js'

// Monta a mensagem de pedido formatada para o WhatsApp
export function buildOrderMessage(items, total, storeName) {
  const lines = items.map(({ product, qty }) =>
    `• ${qty}x ${product.name} — ${formatCurrency(product.price * qty)}`
  )

  return [
    `🍔 *Pedido — ${storeName}*`,
    '',
    ...lines,
    '',
    `*Total: ${formatCurrency(total)}*`,
    '',
    '_Pedido gerado pelo cardápio digital_',
  ].join('\n')
}

/**
 * Abre o WhatsApp com o pedido pronto
 * @param {string} phone    - número no formato 5583999999999
 * @param {string} message  - texto já formatado
 */
export function sendToWhatsApp(phone, message) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank')
}
