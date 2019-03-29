<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4">
            Tab Tracker
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat>
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
            
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>

