export interface UserDataDto {
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

export interface UserInfoDto {
  msg: string;
  userInfo: {
    id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    avatar: string;
    email: string;
    clientId: string;
    clientCode: string;
    clientUid: string;
    inn: string;
    pnfl: string;
    asSerialNumber: string;
    status: string;
    phoneNumber: string;
    username: string;
  };
  businessName: string;
  user: {
    userId: string
    businessId: string
    username: string
    password: string
    role: string
    roleName: string
    roleId: string
    roleType: string
  }
  business: {
    id: number
    clientCode: string
    clientId: string
    clientUid: string
    inn: string
    mfo: string
    name: string
    status: string
  }
}
