import apiUtil from '../utilities/apiHelper'
export function GetAnalytics(data,token) {
    return apiUtil.getApi("transaction/getAnalytics",token,data)
  }