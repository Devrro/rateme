import {environment} from "../environments/environment"

const {URL} = environment;

export const user_urls = {
  register: `${URL}/users/signup`,
  login: `${URL}/token`,
  refresh: `${URL}/token/refresh`
}

export const boards_url = {
  me: `${URL}/users/me`,
  profile: `${URL}/users/profile`,
  all_users: `${URL}/users/all`,
}

