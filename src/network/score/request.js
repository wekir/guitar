import axios from "axios";

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/edc2deb7428c66fc84748843ed9d2d25/score',
    timeout:5000
  })
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })

  //3.发送真正的网络请求
  return  instance(config)
}