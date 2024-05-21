const BASE_URL = "https://meddata-backend.onrender.com";
export const getStates = async () => {
  const response = await fetch(`${BASE_URL}/states`);
  if (!response.ok) {
    throw new Error(`Error fetching states: ${response.statusText}`);
  }
  return response.json();
};
export const getCities = async (state) => {
  const response = await fetch(`${BASE_URL}/cities/${state}`);
  if (!response.ok) {
    throw new Error(`Error fetching cities for state ${state}: ${response.statusText}`);
  }
  return response.json();
};
export const getMedicalCenters = async (state, city) => {
  const response = await fetch(`${BASE_URL}/data?state=${state}&city=${city}`);
  if (!response.ok) {
    throw new Error(`Error fetching medical centers for state ${state} and city ${city}: ${response.statusText}`);
  }
  return response.json();
};