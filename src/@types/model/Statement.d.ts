declare module '@Types/models' {
  export interface statement {
    user: {
      first_name: string,
      last_name: string
    },
    value: number,
    type: 'pay' | 'received',
    updatedAt: Date
  }
}
