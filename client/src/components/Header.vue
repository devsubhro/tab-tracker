<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4">
            Tab Tracker
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn @click="navigate('songs')" flat>
                browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link to="register">
                <v-btn v-if="!$store.state.is_user_logged_in" flat>Sign Up</v-btn>
            </router-link>

            <router-link to="login">
                <v-btn v-if="!$store.state.is_user_logged_in" flat>Sign In</v-btn>
            </router-link>

            <router-link to="/">
                <v-btn v-if="$store.state.is_user_logged_in" @click="logout" flat>Sign Out</v-btn>
            </router-link>
            
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
        },
        navigate(goto) {
            const ref = {
                name: goto
            }
            this.$router.push(ref);
        }
    }
}
</script>

<style scoped>

</style>

