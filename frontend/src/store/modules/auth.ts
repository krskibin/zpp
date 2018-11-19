import HTTP from '@/utils/http';
import { AUTH_SAVE_USER, AUTH_DELETE_USER, AUTH_SAVE_INFO } from '@/store/mutationTypes';


interface State {
  userId: number | null;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

const state: State = {
  userId: null,
  email: '',
  firstName: '',
  lastName: '',
  token: localStorage.getItem('token') || '',
};

const getters = {
  getUserEmail: (storeState: State) => storeState.email,
  getFirstName: (storeState: State) => storeState.firstName,
  getLastName: (storeState: State) => storeState.lastName,
  getUserId: (storeState: State) => storeState.userId,
  getUserInfo: (storeState: State) => ({
    firstName: storeState.firstName || '',
    lastName: storeState.lastName || '',
    email: storeState.email || '',
  }),
};

const actions = {
  async login(ctx: any, credentials: any) {
    try {
      const response = await HTTP.post('users/token-auth/', credentials);
      ctx.commit(AUTH_SAVE_USER, {
        email: credentials.email,
        token: response.data.token,
      });
      ctx.dispatch('getUserInfo');
      return {
        success: true,
        message: 'Successfully logged in',
      };
    } catch (error) {
      if (error.response.data) {
        return {
          success: false,
          message: 'Unable to log in with provided credentials',
        };
      } else {
        return {
          success: false,
          message: 'Unable to connect to server',
        };
      }
    }
  },
  async getUserInfo(ctx: any) {
    try {
      const response = await HTTP.get('users/user-info/');
      ctx.commit(AUTH_SAVE_INFO, {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        userId: response.data.id,
        email: response.data.email,
      });
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Network error',
      };
    }
  },
  async verifyToken(ctx: any) {
    try {
      const tokenBody = {token: state.token};
      await HTTP.post('users/token-verify/', tokenBody);
      return {
        success: true,
        message: 'Token is valid',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Invalid token',
      };
    }
  },
  logout(ctx: any) {
    ctx.commit(AUTH_DELETE_USER);
  },
};

const mutations = {
  [AUTH_SAVE_USER](storeState: State, payload: State) {
    storeState.token = payload.token;
    state.token = payload.token;
    localStorage.setItem('token', payload.token);
    HTTP.defaults.headers.common.Authorization = 'JWT ' + payload.token;
  },
  [AUTH_DELETE_USER](storeState: State) {
    storeState.firstName = '';
    storeState.lastName = '';
    storeState.email = '';
    storeState.userId = null;
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    HTTP.defaults.headers.common.Authorization = '';
  },
  [AUTH_SAVE_INFO](storeState: State, payload: State) {
    storeState.firstName = payload.firstName;
    storeState.lastName = payload.lastName;
    storeState.userId = payload.userId;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
