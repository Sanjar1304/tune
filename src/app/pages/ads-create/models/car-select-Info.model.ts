export interface CarSelectInfoResponse {
  items: Array<{
    filter: any
    id: number,
    name: string,
    slug: string,
    isRequired: boolean,
    categoryId: number,
    hasValues: boolean,
    isFilterable: boolean,
    createType: string,
    currentValue: string,
    values: Array<{id: string, value: string}>
  }>
}

