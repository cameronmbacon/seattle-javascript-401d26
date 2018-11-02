import { getCookie, deleteCookie } from '../utils/cookie';

const SLUGGRAM_TOKEN = 'X-Sluggram-Token';

const initialState = getCookie(SLUGGRAM_TOKEN);

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      deleteCookie(SLUGGRAM_TOKEN);
      return null;
    default:
      return state;
  }
};
