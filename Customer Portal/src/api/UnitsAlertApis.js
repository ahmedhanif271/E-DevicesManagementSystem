import apiUtil from '../utilities/apiHelper'
export function CreateUnitsAlert(data,token) {
  return apiUtil.postApi('transaction/createUnitsAlert',token, data)
}