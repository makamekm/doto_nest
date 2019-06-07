import cookie from 'cookie';

export const getCookie = ($axios) => {
  if (process.client) {
    return cookie.parse(document.cookie || '');
  } else {
    return cookie.parse($axios.defaults.headers.common.cookie || '');
  }
};

export const setCookie = (cookies) => {
  const newCookie = Object.keys(cookies)
    .map(key => cookie.serialize(key, cookies[key]))
    .join('; ');
  document.cookie = newCookie;
};
