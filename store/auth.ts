import { StoreOptions } from 'vuex';
import { getCookie, setCookie } from '~/utils/cookie';

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
}

export interface UserState {
  user?: User;
  isLoading: boolean;
}

const store: StoreOptions<UserState> = {
  state: () => ({
    user: undefined,
    isLoading: true,
  }),
  actions: {
    async check({ commit }) {
      try {
        commit('setIsLoading', true);
        const { data } = await this.$axios.get(`/auth/user`);
        const { token, ...user } = data;
        commit('setUser', user);
      } finally {
        commit('setIsLoading', false);
      }
    },
    async login({ commit }, { username, password }) {
      const { data } = await this.$axios.post(`/auth/login`, {
        username, password,
      });

      const { token, ...user } = data;

      commit('setUser', user);

      if (process.client) {
        const cookies = getCookie(this.$axios);
        cookies.token = token;
        setCookie(cookies);
      }
    },
    async logout({ commit }) {
      if (process.client) {
        const cookies = getCookie(this.$axios);
        cookies.token = '';
        setCookie(cookies);
      }
      commit('setUser', null);
    },
    async register({ dispatch }, { username, password }) {
      await this.$axios.post(`/auth/register`, {
        username, password,
      });

      await dispatch('login', { username, password });
    },
  },
  mutations: {
    setUser: (state, user) => state.user = user,
    setIsLoading: (state, isLoading) => state.isLoading = isLoading,
  },
};

export default store;
