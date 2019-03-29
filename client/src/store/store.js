import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

const store = new vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        is_user_logged_in: false
    },
    mutations: {
        setToken(state, token) {
            // the state is the obj literal we defined in store
            state.token = token;
            if(token) {
                state.is_user_logged_in = true;
            } else {
                state.is_user_logged_in = false;
            }
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        setToken({commit}, token) {
            //call the mutation 'setToken' and pass it the data
            commit('setToken', token);
        },
        setUser({commit}, user) {
            commit('setUser', user);
        }
    }
});

export default store;