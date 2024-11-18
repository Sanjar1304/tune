export interface SortingFormModel {
  id: number;
  componentType: string;
  regexp: string | null;
  title: string;
  placeholder: string;
  pairFilter?: { // Make pairFilter optional
    componentType: string;
    id: number;
    pairFilter: {} | null;
    placeholder: string;
    regexp: string;
    title: string;
    values: { id: number; value: string }[];
  };
  values: Array<{ id: string; value: string }>;
}


export interface SortingFormSelection {
  filterId: number;
  value: string;
  from?: string;   // Used for ARRANGE from input
  to?: string;
  componentType: string;
  pairFilter?: {  // Make pairFilter optional
    componentType: string;
    filterId: number;
    pairFilter: {} | null;
    placeholder: string;
    regexp: string;
    title: string;
    values: { id: number; value: string }[];
  };
}
