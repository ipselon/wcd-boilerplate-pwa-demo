import axios from 'axios';

let axiosInstance;

function getInstance() {
  if (!axiosInstance) {
    axiosInstance = axios.create();
  }
  return axiosInstance;
}

export function get(url) {
  return getInstance()
    .get(url)
    .then(response => response.data);
}
