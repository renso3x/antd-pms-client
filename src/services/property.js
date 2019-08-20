import httpRequest from './http';

export function fetchPropertyTypesAPI() {
  return httpRequest.get(`${process.env.REACT_APP_API_URL}/api/types`);
}

export function postPropertyTypeAPI(data) {
  return httpRequest.post(`${process.env.REACT_APP_API_URL}/api/types`, data);
}

export function updatePropertyTypeAPI(record) {
  return httpRequest.put(
    `${process.env.REACT_APP_API_URL}/api/types/${record.id}`,
    record.data
  );
}

export function deletePropertyType(record) {
  return httpRequest.delete(
    `${process.env.REACT_APP_API_URL}/api/types/${record._id}`
  );
}
