import apiUtil from '../utilities/apiHelper'
export function CreateComplaints(data,token) {
    return apiUtil.postApi("transaction/createComplaintsType",token,data)
  }