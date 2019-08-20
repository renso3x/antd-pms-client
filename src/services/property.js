import httpRequest from './http';

export function fetchPropertyTypesAPI() {
  return httpRequest.get(`${process.env.REACT_APP_API_URL}/api/types`);
}
