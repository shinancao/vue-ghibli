import axios from './axios'

const baseUrl = 'https://ghibliapi.herokuapp.com/'

export function fetchList () {
  return axios({
    url: baseUrl + 'films',
    method: 'get'
  })
}

export function fetchImages () {
  return axios({
    url: '/images',
    method: 'get'
  })
}
