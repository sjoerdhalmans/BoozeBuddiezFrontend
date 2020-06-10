import Axios from "axios";

export default {
    state: {
        user: null,
        friends: [],
    },
    mutations: {
        SAVE_USER(state, user) {
            state.user = user;
        },
        SAVE_FRIENDS(state, friends) {
            state.friends = friends;
        },
    },
    getters: {
        getUser: state => {
            return state.user;
        },
        getFriends: state => {
            return state.friends;
        },

    },
    actions: {
        SaveUser(context, user) {
            context.commit("SAVE_USER", user);
        },

        async checkForUser() {

        },

        SaveFriends({ commit }, friends) {
            commit("SAVE_FRIENDS", friends);
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
                        this.dispatch("SaveUser", res.data)
                    }
                })
        }
    }
};