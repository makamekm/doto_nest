// import Todo from './todo';

export default {
    state: () => ({ list: [] }),
    mutations: {
        add: (state, todo) => state.list.push(todo),
    },
};
