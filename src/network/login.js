import {request} from "./request";

export function getlogin(phone,captcha) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      captcha
    }
  })
}

/**
  * 登录
*/
export function getpasswordlogin(phone,password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}

export function getcaptcha(phone) {
  return request({
    url: '/captcha/sent',
    params: {
      phone,
    }
  })
}