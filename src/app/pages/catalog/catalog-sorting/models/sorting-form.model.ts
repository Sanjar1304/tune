export interface SortingFormModel {
  id: number,
  componentType: string,
  regexp: string | null,
  title: string,
  placeholder: string,
  values: Array<{id: string, value: string}>
}
