import httpRequest from './http';

export function fetchAccomodationsAPI() {
  return httpRequest.get(`${process.env.REACT_APP_API_URL}/api/accomodations`);
}

export function postAccomodationAPI(data) {
  return httpRequest.post(
    `${process.env.REACT_APP_API_URL}/api/accomodations`,
    data
  );
}

export function updateAccomodationAPI(record) {
  console.log(record);
  return httpRequest.put(
    `${process.env.REACT_APP_API_URL}/api/accomodations/${record.id}`,
    record.data
  );
}

export function deleteAccomodation(record) {
  return httpRequest.delete(
    `${process.env.REACT_APP_API_URL}/api/accomodations/${record._id}`
  );
}
