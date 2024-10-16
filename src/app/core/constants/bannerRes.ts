export interface BannerRes {
  items: Array<{
    id: string,
    title: string,
    description: string,
    content: string
    lang: string,
    previewImage: string,
    images: string[],
    urgent: boolean,
    active: boolean,
    order: number
  }>,
  paging: {
    currentPage: number,
    totalPages: number,
    totalItems: number
  }
}

