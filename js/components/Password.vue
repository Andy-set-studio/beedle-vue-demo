<template>
    <div class="[ boilerform ] [ password ]">
        <div>
            <label for="password" class="c-label">Enter your password</label>
            <input class="c-input-field" :type="fieldType" id="password" />
        </div>
        <div>
            <button class="c-button" v-on:click.prevent="togglePasswordVisibility">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script>
    import store from '../store.js';

    export default {
        props: {
        },
        data() {
            return {
                state: store.state
            };		
        },
        computed: {
            fieldType() {
                return this.state.passwordVisibility === 'concealed' ? 'password' : 'text';
            },
            buttonText() {
                return this.state.passwordVisibility === 'concealed' ? 'Show password' : 'Hide password';
            }
        },
        methods: {
            togglePasswordVisibility() {
                const self = this;

                store.dispatch('changePasswordVisibility', (self.state.passwordVisibility === 'concealed' ? 'visible' : 'concealed'));
            }
        }
    }
</script>
