import {IUserModelInfo} from "./IUser";

export interface PublicPlace {
  id: string,
  name: string,
  working_time_start?: string,
  working_time_end?: string,
  created_at: string
  user: IUserModelInfo,
  address: PublicPlaceAddress,
  qr_data: QrData,
}

export interface PublicPlaceAddress {
  "id": string,
  "country": string
  "city": string
  "street": string
  "street_number": string
  "zipcode": string
}

export interface QrData {
  "public_place": string
  "qr_code": string
  "qr_url": string
  "created_at": string
}

export interface CreatePlace {
  name: string,
  address: {
    country: string
    city: string
    street: string
    street_number: string
    zipcode: string
  }
}
