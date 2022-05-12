import apiUtil from '../utilities/apiHelper'

export function CreateNewNetwork(data,token) {
  return apiUtil.postApi('transaction/createNetworkType',token, data)
}

export function GetNetworkList(data,token) {
  return apiUtil.getApi("transaction/getNetworkType",token, data)
}


//export function LinkDonor(data,token) {
//  return apiUtil.postApi('donor/link/child', token, data)
//}

//export function DeLinkDonor(data,token) {
  //return apiUtil.postApi('donor/delink/child', token, data)
//}
