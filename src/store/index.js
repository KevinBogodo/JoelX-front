import { createStore } from 'vuex'
// Axios
import axios from 'axios';
// Promise
import 'es6-promise/auto'

const instance = axios.create({
    baseURL: 'http://joelx.test/api/auth/'
});

// create Store 
const store = createStore({
    state: {
        status: '',
        user: {
            userId: -1,
            token: '',
        },
    },
    mutations: {
        //  mut for statut
        setStatus(state, status) {
            state.status = status;
        },
        // mutation login user
        logUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        login: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject)=> {
                // call for instance axios and pass userInfos as params
                instance.post('/login', userInfos)
                .then(function (response) {
                    commit('setStatus', '');
                    // Take current user loged
                    commit('logUser', response.data);
                    resolve(response);
                })
                .catch(function (error){
                    commit('setStatus', 'error_login');
                    reject(error);
                });
            });
        },
        createAccount: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject)=> {
                commit;
                // call for instance axios and pass userInfos as params
                instance.post('/register', userInfos)
                .then(function (response) {
                    commit('setStatus', 'created');
                    resolve(response);
                })
                .catch(function (error){
                    commit('setStatus', 'error_create');
                    reject(error);
                });
            });
        }
    }

})

export default store;