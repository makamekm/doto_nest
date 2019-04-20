import { StoreOptions } from 'vuex';

export interface Node {
  id: number;
  name: string;
}

export interface NodesState {
  nodes: Node[];
  node?: Node;
}

const store: StoreOptions<NodesState> = {
  state: () => ({
    nodes: [],
    node: undefined,
  }),
  actions: {
    async loadNodes({ commit }) {
      const { data } = await this.$axios.get(`/node/list`);
      commit('setData', data.list);
    },
    async loadNode({ commit }, id) {
      const { data } = await this.$axios.get(`/node/get`, { query: { id }});
      commit('setNode', data.data);
    },
  },
  mutations: {
    setData: (state, data) => state.nodes = data,
    setNode: (state, node) => state.node = node,
  },
};

export default store;
