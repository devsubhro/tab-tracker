<template>
<v-layout column>
    <v-flex xs6 offset-xs3 style="margin-right:25%">
        <content-panel title="Sign In">
            Email: <input name="email" type="email" placeholder="email" v-model="email" />
            <br />
            Password: <input name="password" type="password" placeholder="password" v-model="password" />
            <br />
            <v-btn @click="login">Sign In</v-btn>
            <div class="error" v-html="error"></div>
            <div class="success" v-html="success"></div>
        </content-panel>
    </v-flex>
</v-layout>
    
</template>

<script>
import ContentPanel from '@/components/ContentPanel'
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
    components: {
        ContentPanel
    },
    methods: {
        
        async login() {
            try {
                this.error = '';
                this.success = '';
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                });
                
                if(response.data.error) {
                    this.error = response.data.error;
                } else {
                    //this will call setToken() method defined in action block inside store/store.js
                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUser', response.data.user);
                    this.success = `You are logged in`;
                }
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
    background: #febdbd !important;
    border-color: #febdbd !important;
}
.success {
    color: green;
    background: #7adb7e;
    border-color: #7adb7e;
}
</style>
