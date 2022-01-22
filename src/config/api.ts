export const USER_ROUTES = {
  SIGNIN: '/user/singin',
  SIGNUP: '/user/singnup',
  ME: '/user/me'
}



export const API_ROUTES = {
  USER: {...USER_ROUTES},

}

export const api = {
  API_ROUTES,
  BASE_URL: 'https://mini-inter-api.herokuapp.com'
}
