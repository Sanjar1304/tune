export interface ICarDetailRes {
  id: string;
  categoryId: number;
  userId: string;
  status: string;
  price: {
    amount: number;
    scale: number;
    currency: string; },
  name: string;
  images: Array<{link: string}>,
  resProperties: Array<{
    id: number;
    name: string;
    slug: string;
    value: string;
    valueTranslate: string;
  }>,
  description: string;
  user: {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    userType: string;
    rating: number;
  }
}
