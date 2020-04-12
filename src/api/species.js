import axios from './axios'

const baseUrl = 'https://ghibliapi.herokuapp.com/'

export function fetchList () {
  return axios({
    url: baseUrl + 'species',
    method: 'get'
  })
}
