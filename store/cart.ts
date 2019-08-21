import { StoreOptions } from 'vuex';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductCart {
  count: number;
  product: Product;
}

export interface CartState {
  [x: string]: any;
  items: ProductCart[];
}

const store: StoreOptions<CartState> = {
  state: () => ({
    items: [],
  }),
  actions: {
    async loadItems({ commit, rootState }) {
      await new Promise((r) => setTimeout(r, 5000));
      //   const { data } = await this.$axios.get(`/cart/list`);
      //   commit('setItems', data.list);
    },
  },
  mutations: {
    setItems: (state, items) => state.items = items,
  },
};

export default store;
