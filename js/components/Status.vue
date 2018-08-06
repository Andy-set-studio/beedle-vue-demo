<template>
    <dl class="c-status">
        <dt>Password visibility status</dt>
        <dd>{{ state.passwordVisibility }}</dd>
    </dl>
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
        }
    }
</script>
