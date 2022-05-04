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
    },
    mutations: {
        setStatus(state, status) {
            state.status = status;
        }
    },
    actions: {
        login: ({commit}, userInfos) => {
            return new Promise((resolve, reject)=> {

                commit;
                // call for instance axios and pass userInfos as params
                instance.post('/login', userInfos)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error){
                    reject(error);
                });
            });
        },
        createAccount: ({commit}, userInfos) => {
            return new Promise((resolve, reject)=> {

                commit;
                // call for instance axios and pass userInfos as params
                instance.post('/register', userInfos)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error){
                    reject(error);
                });
            });
        }
    }

})

export default store;