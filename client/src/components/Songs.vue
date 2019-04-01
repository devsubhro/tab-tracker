<template>
    <v-layout column>
    <v-flex xs6 offset-xs3 style="margin-right:25%">
        <content-panel title="Songs">
            <slot>
                <v-btn @click="add_song">Add</v-btn>
                <div v-for="song in song_list" :key="song.Song_id">
                    <div class="song-title">{{song.title}}</div>
                    <v-layout>
                        <v-flex xs6>                        
                            <div class="song-artist">{{song.artist}}</div>
                            <div class="song-genre">{{song.genre}}</div>
                            <div class="song-album">{{song.album}}</div>
                        </v-flex>

                        <v-flex xs6>
                            <!--
                                Interpolation inside attributes has been removed. Use v-bind or 
                                the colon shorthand instead. For example, instead of <div id="{{ val }}">, 
                                    use <div :id="val">
                                        -->
                            <img class="album-image" :src="song.album_image_url" />
                        </v-flex>
                    </v-layout>
                    <v-btn @click="song_detail(song.Song_id)">Detail</v-btn>
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
    },
    methods: {
        add_song() {
            this.$router.push({
                name: 'create-song'
            });
        },
        /****
         * 'view-song' has the path /songs/view/:song_id
         * we send a value for :song_id using params
         */
        song_detail (song_id) {
            this.$router.push({
                name: 'view-song',
                params: {
                    song_id: song_id
                }
            });
        }
    }
}
</script>
<style scoped>
.song-title {
    font-size: 24px;
    text-align: left;
}
.song-artist {
    font-size: 16px;
}
.song-genre, .song-album {
    font-size: 14px;
}
.album-image {
    width: 100%;
}
.error {
    color: red;
    background: #febdbd !important;
    border-color: #febdbd !important;
}
</style>


