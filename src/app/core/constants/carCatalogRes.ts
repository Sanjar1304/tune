export interface CarCatalogRes {
  items: Array<{
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
    topSideProps: Array<{
      propertyId: number,
      lang: string,
      name: string,
      value: string,
      valueNumeric: null
    }>,
    bottomSideProps: Array<{
      propertyId: number,
      lang: string,
      slug: string,
      name: string,
      value: string,
      valueNumeric: null
    }>,
    isFavorite: boolean
  }>,
  facets: Array<{
    id: string,
    value: string
  }>
  paging: {
    currentPage: number,
    totalPages: number,
    totalItems: number
  }
}
