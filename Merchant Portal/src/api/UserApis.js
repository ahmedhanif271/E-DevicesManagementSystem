import apiUtil from '../utilities/apiHelper'

export function CreateNewUser(data,token) {
  return apiUtil.postApi('transaction/createRolesType',token, data)
}

export function GetUserList(data,token) {
  return apiUtil.getApi("transaction/getRolesType",token, data)
}


//export function LinkDonor(data,token) {
//  return apiUtil.postApi('donor/link/child', token, data)
//}

//export function DeLinkDonor(data,token) {
  //return apiUtil.postApi('donor/delink/child', token, data)
//}
