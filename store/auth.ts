import { StoreOptions } from 'vuex';

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
}

export interface UserState {
  user?: User;
}

const store: StoreOptions<UserState> = {
  state: () => ({
    user: undefined,
  }),
  actions: {
    async check({ commit }) {
      let token: string | null = null;

      if (process.client) {
        token = localStorage.getItem('token');
      }

      if (token) {
        try {
          const { data } = await this.$axios.get(`/auth/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const { token: _t, ...user } = data;

          commit('setUser', user);
        } finally {}
      }
    },
    async login({ commit }, { username, password }) {
      const { data } = await this.$axios.post(`/auth/login`, {
        username, password,
      });

      const { token, ...user } = data;

      commit('setUser', user);

      if (process.client) {
        localStorage.setItem('token', token);
      }
    },
    async logout({ commit }) {
      if (process.client) {
        localStorage.removeItem('token');
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
  },
};

export default store;
