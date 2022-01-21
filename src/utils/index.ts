export function formatMoney(money: number):string {
  return money.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
};
