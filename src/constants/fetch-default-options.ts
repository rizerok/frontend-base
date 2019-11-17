const fdo: Partial<Request> = {
  method: 'POST',
  credentials: 'same-origin',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  })
};
export default fdo;
