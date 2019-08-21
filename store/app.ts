import { StoreOptions } from 'vuex';

export interface AppState {
  [x: string]: any;
  isLoading: boolean;
}

const store: StoreOptions<AppState> = {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    async setLoading({ commit, rootState }, isLoading) {
      commit('setLoading', isLoading);
    },
  },
  mutations: {
    setLoading: (state, isLoading) => state.isLoading = isLoading,
  },
};

export default store;
