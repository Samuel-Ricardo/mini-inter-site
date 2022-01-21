export const payment_types = {

  PAY: 'pay',
  RECEIVED: 'received',

  isPay: (type:'pay' | 'received') => {
    return type === 'pay';
  }

}
