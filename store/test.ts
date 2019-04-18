import { StoreOptions } from 'vuex';

export interface Test {
  id: number;
  name: string;
}

export interface TestsState {
  list: Test[];
}

const store: StoreOptions<TestsState> = {
  state: () => ({ list: [] }),
  actions: {
    async load({ commit }) {
      const { data } = await this.$axios.get(`/api/test`);
      commit('setData', data);
    },
  },
  mutations: {
    setData: (state, data) => state.list = data,
  },
};

export default store;
