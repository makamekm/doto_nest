import { StoreOptions } from 'vuex';

export interface Node {
  id: number;
  name: string;
}

export interface NodesState {
  nodes: Node[];
  node?: Node;
  versions;
}

const store: StoreOptions<NodesState> = {
  state: () => ({
    nodes: [],
    node: undefined,
    versions: [],
  }),
  actions: {
    async loadNodes({ commit }) {
      const { data } = await this.$axios.get(`/node/list`);
      commit('setNodes', data.list);
    },
    async loadVersions({ commit }) {
      const { data } = await this.$axios.get(`/version/list`);
      commit('setVersions', data.list);
    },
    async loadNode({ commit, dispatch }, id) {
      const { data } = await this.$axios.get(`/node/get`, { params: { id }});
      commit('setNode', data.data);
      await dispatch('loadVersions');
    },
    async setVersion({ dispatch }, form) {
      await this.$axios.get(`/node/set`, { params: form });
      await dispatch('loadNode');
    },
  },
  mutations: {
    setNodes: (state, nodes) => state.nodes = nodes,
    setNode: (state, node) => state.node = node,
    setVersions: (state, versions) => state.versions = versions,
  },
};

export default store;
