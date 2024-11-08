export interface ProsModel {
  items: Array<{
    id: string,
    banner: ProductModel,
    currency: string;
    infoChunks: [];
    name: string;
    productAdvantages: [];
    productType: string;
    productUserType: string | null;
  }>,
  paging: {
    currentPage: number,
    totalPages: number,
    totalItems: number
  }
}

export interface ProductModel {
  backgroundColors: Array<string>
  bannerProductType: string;
  btnColors: Array<string>;
  btnText: string;
  description: string;
  generatedUrl: string;
  id: string;
  imageUrl: string;
  indicatorBorderColors: Array<string>;
  redirectUrl: string
  textColour: string;
  title: string;
}
