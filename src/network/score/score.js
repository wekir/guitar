import {request} from "./request";

export function getscoredata() {
  return request({
    url: '/select'
  })
}