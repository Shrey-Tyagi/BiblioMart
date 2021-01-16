import router from '../../router'
import Axios from 'axios';
export function login({ commit }) {
    let url = 'https://randomuser.me/api/';//
    Axios.get(url).then(function (response) {
        let userData = {
            displayName: response.data.results[0].name,
            email: response.data.results[0].email,
            gender: response.data.results[0].gender,
            age: response.data.results[0].age,
            address: response.data.results[0].address,
            photoURL: response.data.results[0].picture.thumbnail,
            uid: response.data.results[0].login.uuid
        }
        ////
//         Email
// Name
// Gender
// Age
// Address
// Password
// Image

        /////
        commit("setUserData", userData)
        router.push('/')
    })
        .catch(function (error) {
            console.log(error)
        });
}