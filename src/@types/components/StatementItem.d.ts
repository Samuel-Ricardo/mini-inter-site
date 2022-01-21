declare module '@Types/components/props' {
  export interface StatementItemProps {
    user: {
      first_name: string,
      last_name: string
    },
    value: number,
    type: 'pay' | 'received',
    updatedAt: Date
  }
}
