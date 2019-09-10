import httpRequest from './http';

export function fetchBedConfigAPI() {
  return httpRequest.get(`${process.env.REACT_APP_API_URL}/api/beds`);
}

export function postBedConfigAPI(data) {
  return httpRequest.post(`${process.env.REACT_APP_API_URL}/api/beds`, data);
}

export function updateBedConfigAPI(record) {
  return httpRequest.put(
    `${process.env.REACT_APP_API_URL}/api/beds/${record.id}`,
    record.data
  );
}

export function deleteBedConfig(record) {
  return httpRequest.delete(
    `${process.env.REACT_APP_API_URL}/api/beds/${record._id}`
  );
}
