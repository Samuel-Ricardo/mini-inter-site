declare module '@Types/components/props' {
  export interface Statement {
    user: {
      first_name: string,
      last_name: string
    },
    value: number,
    type: 'pay' | 'received',
    updatedAt: Date
  }
}
