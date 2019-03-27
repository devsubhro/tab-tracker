<template>
<v-layout column>]
    <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
            <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4">
                Email: <input name="email" type="email" placeholder="email" v-model="email" />
                <br />
                Password: <input name="password" type="password" placeholder="password" v-model="password" />
                <br />
                <button @click="register">Register</button>
                <div class="error" v-html="error"></div>
                <div class="success" v-html="success"></div>
            </div>
        </div>
    </v-flex>
</v-layout>
    
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
            success: null
        }
    },
    methods: {
        async register() {
            try {
                //console.log('Register button clicked',this.email, this.password);
                this.error = '';
                this.error = '';
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                });
                this.success = `Your user id is ${response.data.User_id}, email ${response.data.email}`;
            } catch (e) {
                this.error = e.response.data.error;
            }
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
.error {
    color: red;
}
.success {
    color: green
}
</style>
