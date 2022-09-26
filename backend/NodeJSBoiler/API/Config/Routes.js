module.exports = {
    "/transaction/testapi/:name": {
        controller: "testapi",
        allowedMethod: ['POST', 'GET']
    },
    "/transaction/testapi": {
        controller: "testapi",
        allowedMethod: ['POST', 'GET']
    },
    "/transaction/test2": {
        controller: "testapi",
        allowedMethod: ['POST']
    },
    "/transaction/createNetworkType": {
        controller: "CreateNetworkType",
        allowedMethod: ['POST']
    },
    "/transaction/getCustomersDetails": {
        controller: "GetCustomersDetails",
        allowedMethod: ['GET']
    },
    "/transaction/getNetworkType": {
        controller: "GetNetworkType",
        allowedMethod: ['GET']
    },
    "/transaction/createRolesType": {
        controller: "CreateRolesType",
        allowedMethod: ['POST']
    },
    "/transaction/getRolesType": {
        controller: "GetRolesType",
        allowedMethod: ['GET']
    },
    "/transaction/createDeviceType": {
        controller: "CreateDeviceType",
        allowedMethod: ['POST']
    },
    "/transaction/getDeviceType": {
        controller: "GetDeviceType",
        allowedMethod: ['GET']
    },
    "/transaction/createCustomerType": {
        controller: "CreateCustomerType",
        allowedMethod: ['POST']
    },
    "/transaction/getCustomerType": {
        controller: "GetCustomerType",
        allowedMethod: ['GET']
    },
    "/transaction/createPollType": {
        controller: "CreatePollType",
        allowedMethod: ['POST']
    },
    "/transaction/getPollType": {
        controller: "GetPollType",
        allowedMethod: ['GET']
    },
    "/transaction/createBillType": {
        controller: "CreateBillType",
        allowedMethod: ['POST']
    },
    "/transaction/getBillType": {
        controller: "GetBillType",
        allowedMethod: ['GET']
    },
    "/transaction/getBillHistory": {
        controller: "GetBillHistory",
        allowedMethod: ['GET']
    },
    "/transaction/getcenters": {
        controller: "GetCenter",
        allowedMethod: ['GET']
    },
    "/transaction/createcenter": {
        controller: "PostCenter",
        allowedMethod: ['POST']
    }, "/transaction/getpermissions": {
        controller: "GetPermission",
        allowedMethod: ['GET']
    },
    "/transaction/getuserpermissions": {
        controller: "GetUserPermission",
        allowedMethod: ['GET']
    },
    "/transaction/getuserroles": {
        controller: "GetRoles",
        allowedMethod: ['GET']
    },
    "/transaction/getusers": {
        controller: "GetUsers",
        allowedMethod: ['GET']
    },
    "/transaction/createuser": {
        controller: "PostUser",
        allowedMethod: ['POST']
    },
    "/transaction/myprofile": {
        controller: "GetProfile",
        allowedMethod: ['GET']
    },
    "/transaction/changepassword": {
        controller: "ChangePassword",
        allowedMethod: ['POST']
    },
    "/transaction/resetpassword": {
        controller: "ResetPassword",
        allowedMethod: ['POST']
    },
    "/transaction/updateuser": {
        controller: "UpdateUser",
        allowedMethod: ['POST']
    },
    "/transaction/getchannel": {
        controller: "GetChannel",
        allowedMethod: ['GET']
    },
    "/child/newprofile": {
        controller: "PostChildProfile",
        allowedMethod: ['POST']
    },
    "/child/list": {
        controller: "GetChildProfiles",
        allowedMethod: ['GET']
    },
    "/donor/newprofile": {
        controller: "PostDonorProfile",
        allowedMethod: ['POST']
    },
    "/donor/list": {
        controller: "GetDonorProfiles",
        allowedMethod: ['GET']
    },
    "/donor/link/child": {
        controller: "PostLinkDonorChild",
        allowedMethod: ['POST']
    },
    "/donor/link/list": {
        controller: "GetDonorLinkedChilds",
        allowedMethod: ['GET']
    },
    "/donor/delink/child": {
        controller: "PostDeLinkDonorChild",
        allowedMethod: ['POST']
    },
    "/donor/details": {
        controller: "GetDonorDetails",
        allowedMethod: ['GET']
    },

    "/transaction/getMeterDetails": {
        controller: "GetMeterDetails",
        allowedMethod: ['GET']
    },
    "/transaction/getConnectedDevices": {
        controller: "GetConnectedDevices",
        allowedMethod: ['GET']
    },
    "/transaction/getUnitRestriction": {
        controller: "GetUnitRestriction",
        allowedMethod: ['GET']
    },
    "/transaction/getMeterInfo": {
        controller: "GetMeterInfo",
        allowedMethod: ['GET']
    },
    "/transaction/getNetworkInfo": {
        controller: "GetNetworkInfo",
        allowedMethod: ['GET']
    },

    "/transaction/getMyDetails": {
        controller: "GetMyDetails",
        allowedMethod: ['GET']
    },

    "/transaction/getAnalytics": {
        controller: "GetAnalytics",
        allowedMethod: ['GET']
    },

    "/transaction/createUnitsAlert": {
        controller: "CreateUnitsAlert",
        allowedMethod: ['POST']
    },

    "/transaction/createGenerateBills": {
        controller: "GetGenerateBills",
        allowedMethod: ['POST']
    },

    "/transaction/createComplaintsType": {
        controller: "CreateComplaintsType",
        allowedMethod: ['POST']
    },

    "/transaction/getComplaintsType": {
        controller: "GetComplaintsType",
        allowedMethod: ['GET']
    },

    "/transaction/getfetchlastBillByMeterId": {
        controller: "GetGenerateBills",
        allowedMethod: ['GET']
    },
}
