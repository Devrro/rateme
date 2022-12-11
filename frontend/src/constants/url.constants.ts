import {environment} from "../environments/environment"

const {URL} = environment;

export const user_urls = {
  register: `${URL}/users/signup`,
  login: `${URL}/login`,
  refresh: `${URL}/token/refresh`
}

export const boards_url = {
  me: `${URL}/users/me`,
  profile: `${URL}/users/profile`,
  all_users: `${URL}/users/all`,
}

export const PublicPlaceUrl = {
  getMyPlaces: `${URL}/places/my_places`,
  createPlace: `${URL}/places/create_place`,
  deletePlace: `${URL}/places/delete_place`,
}
