<template>
    <v-layout column>
    <v-flex xs6 offset-xs3 style="margin-right:25%">
        <content-panel title="Songs">
            <slot>
                <div v-for="song in song_list" :key="song.Song_id">
                    {{song.title}}<br />
                    {{song.artist}}<br />
                    {{song.album}}
                </div>
            </slot>
            <div class="error" v-html="error"></div>
        </content-panel>
    </v-flex>
</v-layout>
</template>

<script>
import ContentPanel from '@/components/ContentPanel'
import SongsService from '@/services/SongsService.js'
export default {
    data() {
        return {
            song_list: []
        }
    },
    async mounted() {
        try {
            this.error = '';
            const response = await SongsService.getAllSongs();
            if(response.data.error){
                this.error = response.data.error;
            } else {
                this.song_list = response.data;
            }
        } catch (e) {
            this.song_list = [],
            this.error = 'Oops'
        }
    },
    components: {
        ContentPanel
    }
}
</script>
<style scoped>
.error {
    color: red;
    background: #febdbd !important;
    border-color: #febdbd !important;
}
</style>


