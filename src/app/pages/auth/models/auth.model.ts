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

export interface LoginResponseModel {
  user: {
      id: string,
      userType: string,
      username: string,
      tin: number | null,
      pinfl: number | null,
      phone: string,
      email: string | null,
      address: string | null,
      password: string,
      status: string,
      role: {
          name: string,
          type: string,
          permissions: Array<String>
      },
      firstname: string,
      lastname: string | null,
      patronymic: string | null,
      age: number | null,
      gender: string | null,
      companyName: string | null
  },
  access: {
      accessToken: string,
      accessTokenExpire: number,
      refreshToken: string,
      refreshTokenExpire: number
  }
}
