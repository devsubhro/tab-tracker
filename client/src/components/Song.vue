<template>
<v-layout column>
    <v-flex xs1 offset-xs1>
        <content-panel :title="song.title">
            <slot>
            <div class="song-title">{{song.title}}</div>
            <div class="song-artist">Artist: {{song.artist}}</div>
            <div class="song-album">Album: {{song.album}}</div>
            <div class="song-genre">Genre: {{song.genre}}</div>
            <v-layout>
                
                <v-flex xs6>
                    <img class="album-image" :src="song.album_image_url" />
                </v-flex>
                
                <youtube :video-id="youtube_embed_id"></youtube>
                <v-flex xs6>
                </v-flex>
            </v-layout>

            <v-layout>
                <v-flex xs6>
                    <textarea class="box" name="lyrics" v-model="song.lyrics" />
                </v-flex>
                <v-flex xs6>
                    <textarea class="box" name="tab" v-model="song.tab" />
                </v-flex>
            </v-layout>
            
            <div class="error" v-html="error"></div>   
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
            youtube_embed_id: null,
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
                const youtube_url = response.data[0]['youtube_id'];
                const replace_portion = 'https://www.youtube.com/watch?v=';
                this.youtube_embed_id = youtube_url.replace(replace_portion,'');
                this.song = response.data[0];
            }
        } catch (e) {
            this.song = null,
            this.error = 'Oops'
        }
    },
    components: {
        ContentPanel
    },
   
}

</script>

<style scoped>
.song-title {
    font-size: 24px;
    text-align: left;
}
.song-artist {
    font-size: 16px;
    text-align: left;
}
.song-genre, .song-album {
    font-size: 14px;
    text-align: left;
}
.album-image {
    width: 100%;
}
.box {
    border: none;
    width: 400px;
    height: 300px;
    overflow: auto;
}
.error {
    color: red;
    background: #febdbd !important;
    border-color: #febdbd !important;
}
</style>