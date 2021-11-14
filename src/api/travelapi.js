import axios from 'axios'
import jsSHA from 'jssha'
const getAuthorizationHeader = () => {
  const AppID = process.env.REACT_APP_APPID
  const AppKey = process.env.REACT_APP_APPKEY
  const GMTString = new Date().toGMTString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return { Authorization: Authorization, 'X-Date': GMTString }
}
export const travelInfo = axios.create({
  headers: getAuthorizationHeader(),
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/'
})

// export const getSpots = async (city = '') => {
//   try {
//     const res = await travelInfo.get(`ScenicSpot/${city}?$top=30&$format=JSON`)
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// }
