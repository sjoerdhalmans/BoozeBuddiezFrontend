import Axios from "axios";

export default {
    state: {
        user: null,
    },
    mutations: {
        SAVE_USER(state, user) {
            state.user = user;
        },
    },
    getters: {
        getUser: state => {
            return state.user;
        },

    },
    actions: {
        SaveUser(context, user) {
            context.commit("SAVE_USER", user);
        },

        async checkForUser() {

        },

        async getUser(context, user) {
            await Axios
                .get('http://217.101.44.31:8081/api/public/user/getUserByEmail/' + user.email)
                .then(res => {
                    if (res.data == "") {
                        Axios
                            .post('http://217.101.44.31:8081/api/public/user/addUser', {
                                email: user.email,
                                name: user.name
                            })
                            .then(res => {
                                this.dispatch("SaveUser", res.data)
                            })
                    }
                    else {
                        console.log(res)
                        this.dispatch("SaveUser", res.data)
                    }
                })
        }
    }
};