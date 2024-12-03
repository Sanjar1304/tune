export interface UserCheckRequestModel {
  username: string;
  userType: string;
}

export interface UserCheckResponseModel {
  identity: string,
  message: string
}

export interface UserVerifyRequestModel {
  identity: string
  code: number
  password: string
}

export interface UserVerifyResponseModel {
  identity: string,
  encryptKey: string,
  isReg: boolean
}

export interface LoginRequestModel {
  identity: string;
  password: string;
}
