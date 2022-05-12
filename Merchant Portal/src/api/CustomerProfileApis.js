import apiUtil from '../utilities/apiHelper'

export function CreateNewProfile(data,token) {
  return apiUtil.postApi('transaction/createCustomerType',token, data)
}

export function GetCustomerList(data,token) {
  return apiUtil.getApi("transaction/getCustomerType",token, data)
}

export function GetCustomersDetails(data,token) {
  return apiUtil.getApi("transaction/getCustomersDetails",token, data)
}


//export function LinkDonor(data,token) {
//  return apiUtil.postApi('donor/link/child', token, data)
//}

//export function DeLinkDonor(data,token) {
  //return apiUtil.postApi('donor/delink/child', token, data)
//}
