import axios from 'axios'

const API_ENDPOINT = 'https://localhost:3333'

export async function getData(table) {
  return axios(
    {
    method: 'GET',
    url: `${API_ENDPOINT}/${table}`
  }
  ).then(response => response.data.data)
}
