export interface BannerRes {
  items: Array<{
    id: string,
    banner: {
      id: string,
      title: string,
      description: string,
      redirectUrl: string,
      generatedUrl: string,
      btnText: string,
      imageUrl: string,
      textColour: string,
      backgroundColors: [string],
      btnColors: [string],
      indicatorBorderColors: [string],
      bannerProductType: string
    },
    orderNum: number,
    productId: string,
    carouselType: string
  }>,
  paging: {
    currentPage: number,
    totalPages: number,
    totalItems: number
  }
}


