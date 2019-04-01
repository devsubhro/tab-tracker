<template>
<v-layout column>
    <v-flex xs1 offset-xs1>
        <content-panel title="Create Song">
            <slot>
                <div style="position:relative;">
                <div style="position:absolute; width:50%; left:0;">
                    Title: {{song.title}}
                    <br /><br />
                    Artist: {{song.artist}}
                    <br /><br />
                    Album: {{song.album}}
                    <br /><br />
                    Genre: {{song.genre}}
                    <br /><br />
                    Image URL: <img class="album-image" :src="song.album_image_url" />
                    <br /><br />
                    Youtube ID: {{song.youtube_id}}
                    
                    <div class="error" v-html="error"></div>
                    
                </div>
                <div style="position:relative; width:50%; top:0px; left:500px;">
                    Lyrics: <br />
                    <textarea class="box" name="lyrics" v-model="song.lyrics" />
                    <br /><br />
                    Tab: <br />
                    <textarea class="box" name="tab" v-model="song.tab" />
                </div>
                
                </div>
            </slot>
        </content-panel>
    </v-flex>  
</v-layout>
</template>

<script>
import ContentPanel from '@/components/ContentPanel';
import SongsService from '@/services/SongsService';
export default {
    data () {
        return {
            song: null,
            error: null,
        }
    },
    async mounted() {
        try {
            this.error = '';
            // in router/index.js, we have path: '/songs/view/:song_id',
            // and in main, we have sync(store, router)
            const song_id = this.$store.state.route.params.song_id;
            const response = await SongsService.getSong(song_id);
            
            if(response.data.error){
                this.error = response.data.error;
            } else {
                this.song = response.data[0];
            }
        } catch (e) {
            this.song_list = [],
            this.error = 'Oops'
        }
    },
    components: {
        ContentPanel
    },
   
}

</script>

<style scoped>

</style>