import { ChangeEvent, Dispatch, SetStateAction } from "react"

export function formatMoney(money: number):string {
  return money.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
};

export const set = (
    event: ChangeEvent<HTMLInputElement>,
    observer: Dispatch<SetStateAction<any>>
  ) => { observer(event.target.value) }
