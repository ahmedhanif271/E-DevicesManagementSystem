import apiUtil from '../utilities/apiHelper'
export function GetBillsHistory(data,token) {
    return apiUtil.getApi("transaction/getBillHistory",token,data)
  }