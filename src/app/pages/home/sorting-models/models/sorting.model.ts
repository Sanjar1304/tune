export interface SortingModel {
  id: number,
  value: string,
  type: string,
  imageLink: string,
  active: boolean
}

export interface SortingModelInfo {
  items: [
      {
        productId: string,
        name: string,
        price: {
            amount: number,
            scale: number,
            currency: string
        },
        sumPerMonth: {
            amount: number,
            scale: number,
            currency: string
        },
        imageLink: string,
        topSideProps: [],
        bottomSideProps: [],
        isFavorite: boolean
      }
  ],
  facets: [],
  paging: {
      currentPage: number,
      totalPages: number,
      totalItems: number
  }
}
