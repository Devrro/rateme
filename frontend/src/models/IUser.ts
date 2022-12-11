export interface IUserModelSignUp {
  is_doctor: boolean,
  is_patient: boolean,
  email: string,
  password: string,
  profile: IProfile,
}

export interface IUserModelInfo {
  id: number,
  email: string,
  login: string,
  profile: IProfile,
}

export interface IProfile {
  age: string,
  first_name: string,
  last_name: string,
  phone_number: string,
  avatar: string,
  about_user: string,
}

