declare function useMediaQuery(query: number): boolean;

interface Read {
    url: string;
    params?: Object;
}
interface AuthRead extends Read {
    token: string;
}
interface Write {
    url: string;
    params?: Object;
    body?: Object;
}
interface AuthWrite extends Write {
    token: string;
}
declare const publicFetch: ({ url, params }: Read) => Promise<any>;
declare const publicModify: ({ url, params, body }: Write) => Promise<any>;
declare const publicCreate: ({ url, params, body }: Write) => Promise<any>;
declare const publicRemove: ({ url, body }: Write) => Promise<any>;
declare const authFetch: ({ url, params, token }: AuthRead) => Promise<any>;
declare const authCreate: ({ url, params, body, token }: AuthWrite) => Promise<any>;
declare const authModify: ({ url, params, body, token }: AuthWrite) => Promise<any>;

/**
 * Custom hook which simplifies data fetching
 * @param {Object} params - URL prameters that will be sent with the request
 * @param {string} fetcher - Async function that accepts the params and returns the data
 * @param {Array} [listeners=[]] - Array of dependencies which executes fetcher only if the dependencies have changed between renderings. By default it will run once
 */
declare const useFetch: (params: Object | false, fetcher: Function, listeners?: any[]) => {
    data: any;
    validating: boolean;
    refresh: () => void;
};

export { authCreate, authFetch, authModify, publicCreate, publicFetch, publicModify, publicRemove, useFetch, useMediaQuery };
