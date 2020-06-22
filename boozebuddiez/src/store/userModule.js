import Axios from "axios";

export default {
    state: {
        user: {
            id: 46
        },
        friends: [],
        potatoes: [],
    },
    mutations: {
        SAVE_USER(state, user) {
            state.user = user;
        },
        SAVE_FRIENDS(state, friends) {
            state.friends = friends;
        },
        SAVE_POTATOES(state, potatoes) {
            state.potatoes = potatoes
        }
    },
    getters: {
        getUser: state => {
            return state.user;
        },
        getFriends: state => {
            return state.friends;
        },
        getPotatoes: state => {
            return state.potatoes;
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
        SavePotatoes(context, potatoes) {
            context.commit("SAVE_POTATOES", potatoes)
        },
        async getUser(context, user) {
            var userid

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
                                userid = res.data.id
                            })
                    }
                    else {
                        this.dispatch("SaveUser", res.data)
                        userid = res.data.id
                    }
                })
                await Axios
                .get('http://217.101.44.31:8086/api/public/bar/getAllUserRatings/' + userid)
                .then(res => {
                    res
                    this.dispatch("SaveRatingCollection", res.data)
                })
        },
    }
};