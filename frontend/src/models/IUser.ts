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
  profile: IProfile,
  user_role: IUserRole[]
}

// export interface IDoctor<T> extends IUserModelInfo {
//
// }

export interface IPatient<T> extends IUserModelInfo {
   patient_card:T
}

export interface IProfile {
  age: string,
  first_name: string,
  second_name: string,
  last_name: string,
  phone_number: string,
  avatar: string,
  about_user: string,
}

export interface IUserRole {
  role: string,
  code: number,
}
