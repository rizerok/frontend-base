// eslint-disable-next-line import/prefer-default-export
export const fetchResponseError = ({ status, statusText }: Response): Error => new Error(
  `fetch Response return status ${status} ${statusText}`
);
