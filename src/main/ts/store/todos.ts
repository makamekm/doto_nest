import { StoreOptions } from 'vuex';

export interface Todo {
    id: number;
    isDone: string;
    text: string;
}

export interface TodosState {
    list: Todo[];
}

const store: StoreOptions<TodosState> = {
    state: () => ({ list: [] }),
    actions: {
        add({ commit }, text: string) {
            commit('add', {
                id: Math.random(),
                text,
                isDone: false,
            });
        },
    },
    mutations: {
        add: (state, todo) => state.list.push(todo),
    },
};

export default store;
