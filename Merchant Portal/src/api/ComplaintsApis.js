import apiUtil from '../utilities/apiHelper'


export function GetComplaints(data,token) {
  return apiUtil.getApi("transaction/getComplaintsType",token, data)
}
