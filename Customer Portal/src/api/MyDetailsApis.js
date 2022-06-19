import apiUtil from '../utilities/apiHelper'
export function GetMyDetails(data,token) {
    return apiUtil.getApi("transaction/getMyDetails",token,data)
  }