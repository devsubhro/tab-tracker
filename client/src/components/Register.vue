<template>
    <div>
        <h1>Register</h1>
        Email: <input name="email" type="email" placeholder="email" v-model="email" />
        <br />
        Password: <input name="password" type="password" placeholder="password" v-model="password" />
        <br />
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            //console.log('Register button clicked',this.email, this.password);
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            });
            console.log(response.data);
        }
    }
    /*watch: {
        email(value) {
            console.log("Email changed",value);
        }
    }*/
}
</script>

<style scoped>
</style>
