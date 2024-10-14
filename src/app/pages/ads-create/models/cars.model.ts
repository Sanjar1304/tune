export interface ICarModelList {
  items: Array<ICarInfo>,
  paging: {
    currentPage: number,
    totalPages: number,
    totalItems: number
  }
}

export interface ICarInfo {
  id: string,
  model: string,
  transportId: string;
  vehicleColor: string,
  plateNumber: number | null
}
