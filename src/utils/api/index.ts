// /* eslint no-console: "off" */
// import { fetchResponseHandler } from 'utils/response-handlers/fetch';
// import fdo from 'constants/fetch-default-options';
//
// const urlApi = '/api';
//
// interface FetchData {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// }
//
// type DataType = FormData | FetchData | string;
//
// type CustomRequest = Partial<Omit<Request, 'body'>> & { body: DataType | null };
//
// class Api {
//   path: string;
//
//   fetchDefaultOptions: CustomRequest;
//
//   config({
//     path = urlApi,
//     fetchDefaultOptions = fdo,
//     apiResponseHandler,
//     handleErrors = e => console.log('catch', e)
//   }) {
//     this.path = path;
//     this.fetchDefaultOptions = fetchDefaultOptions;
//     this.apiResponseHandler = apiResponseHandler;
//     this.handleErrors = handleErrors;
//   }
//
//   // eslint-disable-next-line class-methods-use-this
//   dataToOptionsBodyModifier(options: CustomRequest, data: FetchData) {
//     if (data === undefined || data === null) {
//       if (options.body !== undefined) {
//         // TODO add warning if body used in fetchCustomOptions
//         // eslint-disable-next-line no-param-reassign
//         delete options.body;
//       }
//     } else if (data instanceof FormData) {
//       console.log('form data', data);
//       // eslint-disable-next-line no-param-reassign
//       options.body = data;
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       options.body = JSON.stringify(data);
//     }
//   }
//
//   fetch(
// url: string, data: FetchData, fetchCustomOptions: Partial<Request> = {}, isHandleResponse = true
//   ): Promise<FetchData> {
//     const options = {
//       ...this.fetchDefaultOptions,
//       ...fetchCustomOptions
//     };
//
//     this.dataToOptionsBodyModifier(options, data);
//
//     return fetch(this.path + url, options)
//       .then(fetchResponseHandler)
//       .then(res => res.json())
//       .then(this.apiResponseHandler && isHandleResponse
//         ? this.apiResponseHandler
//         : res => res)
//       .catch(this.handleErrors);
//   }
// }
//
// const api = new Api();
//
// export default api;
