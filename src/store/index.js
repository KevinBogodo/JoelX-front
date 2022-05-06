import { createStore } from 'vuex'
// Axios
import axios from 'axios';
// Promise
import 'es6-promise/auto'

const instance = axios.create({
    baseURL: 'http://joelx.test/api/auth/'
});

// Create user in local storage for reload
let user = localStorage.getItem('user');
if(!user) {
//    If not definet set default
    user = {
        userId: -1,
        token: '',
    };
} else {
    // if define try to set value
    try {
        user = JSON.parse(user);
        instance.defaults.headers.common['Authorization'] = 'Bearer '+ user.token;
    } catch (ex) {
    //  in case of error set to not user
        user = {
            userId: -1,
            token: '',    
        };
    }
}
// create Store 
const store = createStore({
    state: {
        status: '',
        user: user,
        userInfos: {
            nom: '',
            prenom: '',
            email: ''
        },
    },
    mutations: {
        //  mut for statut
        setStatus(state, status) {
            state.status = status;
        },
        // mutation login user
        logUser(state, user) {
            instance.defaults.headers.common['Authorization'] = 'Bearer '+ user.token;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        // mut for user Infos
        userInfos(state, userInfos) {
            state.userInfos = userInfos;
            // console.log(user.token);
        },
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
        },
        getUserInfos: ({commit}) => {
            instance.get('/profile')
            .then(function (response){
                commit('userInfos', response.data);
                resolve(response)
            })
            .catch(function(){
            });
          
        }
    }

})

export default store;