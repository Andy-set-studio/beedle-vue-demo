import Store from 'beedle';

export default new Store({  
    actions: {
        changePasswordVisibility(context, payload) {
            context.commit('setPasswordVisibility', payload);
        }
    },
    mutations: {
        setPasswordVisibility(state, payload) {
            state.passwordVisibility = payload;
            return state;
        }
    },
    initialState: {
        passwordVisibility: 'concealed'
    }
});
