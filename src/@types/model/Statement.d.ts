declare module '@Types/models' {
  export interface statement {
    user: {
      firstName: string,
      lastName: string
    },
    value: number,
    type: 'paid' | 'received',
    updatedAt: Date
  }
}
