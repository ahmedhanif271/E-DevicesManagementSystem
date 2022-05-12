import apiUtil from '../utilities/apiHelper'

export function CreateNewMeter(data,token) {
  return apiUtil.postApi('transaction/createDeviceType',token, data)
}

export function GetMeterList(data,token) {
  return apiUtil.getApi("transaction/getDeviceType",token, data)
}


//export function LinkDonor(data,token) {
//  return apiUtil.postApi('donor/link/child', token, data)
//}

//export function DeLinkDonor(data,token) {
  //return apiUtil.postApi('donor/delink/child', token, data)
//}
