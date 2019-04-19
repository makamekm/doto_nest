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
      console.log(this.$axios);
      
      const { data } = await this.$axios.get(`/test`);
      commit('setData', data);
    },
  },
  mutations: {
    setData: (state, data) => state.list = data,
  },
};

export default store;
