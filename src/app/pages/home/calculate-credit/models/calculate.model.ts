export interface CalculateModel {
    monthlyAmount: {
      amount: number,
      currency: string
    },
    totalPrincipalAmount: {
      amount: number,
      currency: string
    },
    totalInterestAmount: {
      amount: number,
      currency: string
    },
    totalPaymentAmount: {
      amount: number,
      currency: string
    },
    interest: number,
    items: [
      {
        order: number,
        remainingAmount: {
          amount: number,
          currency: string
        },
        interestAmount: {
          amount: number,
          currency: string
        },
        principalAmount: {
          amount: number,
          currency: string
        },
        monthlyAmount: {
          amount: number,
          currency: string
        },
        date: string
      }
    ]
}


export interface CalculateRequestModel {
  amount: {
    amount: number,
    scale: number,
    currency: string
  },
  term: number,
  interest: number,
  initialAmount: {
    amount: number,
    scale: number,
    currency: string
  },
  calcType: string
}
