export interface BackendResponseModel<T> {
  timestamp: number;
  success: boolean;
  result: {
    code: number;
    message: string | string[];
    audit: string;
    data: T;
  };
}
