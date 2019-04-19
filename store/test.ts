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
      const { data } = await this.$axios.get(`http://10.24.71.16:3000/api/test`);
      commit('setData', data);
    },
  },
  mutations: {
    setData: (state, data) => state.list = data,
  },
};

export default store;
