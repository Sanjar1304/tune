export interface ICard {
  id: string;
  carName: string;
  carPrice: string;
  images: string[];
  cardCardDetails: carDetails;
}

export interface carDetails {
  statusCar: string;
  productionYear: string;
  mileage: string;
  engine: string;
  kpp: string;
  privod: string;
  generation: string;
  kits: string;
  steeringWheel: string;
  body: string;
  color: string;
  pts: string;
  ownerByPTS: number;
  condition: string;
  vinNumber: string;
  ownerName: string;
  ownerPhone: string;
  ownerAddress: string;
  description: {
    title: string,
    body: string
  };
}

