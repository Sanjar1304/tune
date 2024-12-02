import { environment } from "../../../environments/environment";


export const BASE_URL = environment.API_BASE;

const API_PATHS = {
    V1: `${BASE_URL}/api/v1`,
    AUTH: `${BASE_URL}/auth`,
    FILE: `${BASE_URL}/file`,
};

export const ENDPOINTS = {
    CAROUSEL: {
        LIST: `${API_PATHS.V1}/carousel/list`,
    },
    FAVOURITE: {
        ADD: `${API_PATHS.V1}/favourite/add`,
        REMOVE: `${API_PATHS.V1}/favourite/remove`
    },
    PRODUCT: {
        SEARCH_BASIC: `${API_PATHS.V1}/product/search/basic`
    }
}
