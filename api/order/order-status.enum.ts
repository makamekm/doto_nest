export enum OrderStatus {
  Initialized = 'initialized',
  WaitingForPayments = 'waitingForPayments',
  PaymentsDeclined = 'paymentsDeclined',
  Payed = 'payed',
  Gathering = 'gathering',
  Delivering = 'delivering',
  Awaiting = 'awaiting',
  Completed = 'completed',
  Error = 'error',
  Declined = 'declined',
  Issued = 'issued',
}
