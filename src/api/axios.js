import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// progress bar style
import { Message } from 'element-ui'

axios.defaults.timeout = 30000

NProgress.configure({ showSpinner: false })

axios.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(data => {
  NProgress.done()
  return data
}, error => {
  NProgress.done()
  let msg = error.request.responseURL + ' ' + error.response.status + ' ' + error.response.statusText
  Message({ message: msg, type: 'error' })
  return Promise.reject(new Error(error))
})

export default axios
