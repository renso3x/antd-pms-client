import httpRequest from './http';

export function fetchAmenitiesAPI() {
  return httpRequest.get(`${process.env.REACT_APP_API_URL}/api/features/`);
}

export function postAmenitiesAPI(data) {
  return httpRequest.post(
    `${process.env.REACT_APP_API_URL}/api/features/`,
    data
  );
}

export function updateAmenitiesAPI(record) {
  return httpRequest.put(
    `${process.env.REACT_APP_API_URL}/api/features//${record.id}`,
    record.data
  );
}

export function deleteAmenities(record) {
  return httpRequest.delete(
    `${process.env.REACT_APP_API_URL}/api/features//${record._id}`
  );
}
