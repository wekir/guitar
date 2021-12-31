import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/playlist/hot'
  })
}

export function getbanner() {
  return request({
    url: '/banner'
  })
}

// export function getProductData(type,page) {
//   return request({
//     url: '/banner',
//     params: {
//       type,
//       page
//     }
//   })
// }