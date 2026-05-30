// ============================================================
// utils/format.js — Formatação de valores
// ============================================================

//formatar para real
export function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style:                 'currency',
    currency:              'BRL',
    minimumFractionDigits: 2,
  })
}
