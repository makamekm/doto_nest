import { StoreOptions } from 'vuex';
import { Expenses } from '~/api/shared/graphql';

export interface ExpensesState {
  [x: string]: any;
  items: Expenses[];
}

const store: StoreOptions<ExpensesState> = {
  state: () => ({
    items: [],
  }),
  actions: {
    async loadItems({ commit, rootState }) {
      // await new Promise((r) => setTimeout(r, 5000));
        const { data: {data: {expenses}} } = await this.$axios.post(`/graphql`, {
          query: `{
            expenses {
              id
              date
              amount
              merchant
              currency
              categoryName
              parentId
              status {
                stage
              }
            }
          }`
        });
        commit('setItems', expenses);
    },
  },
  mutations: {
    setItems: (state, items) => state.items = items,
  },
};

export default store;
