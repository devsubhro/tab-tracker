<template>
<v-layout column>
    <v-flex xs1 offset-xs1>
        <content-panel title="Create Song">
            <slot>
                <div style="position:relative;">
                <div style="position:absolute; width:50%; left:0;">
                    Title: <input class="linebox" name="title" type="text" placeholder="title" v-model="song.title" />
                    <br /><br />
                    Artist: <input class="linebox" name="artist" type="text" placeholder="artist" v-model="song.artist" />
                    <br /><br />
                    Album: <input class="linebox" name="album" type="text" placeholder="album" v-model="song.album" />
                    <br /><br />
                    Genre: <input class="linebox" name="genre" type="text" placeholder="genre" v-model="song.genre" />
                    <br /><br />
                    Image URL: <input class="linebox" name="album_image_url" type="text" placeholder="image url" v-model="song.album_image_url" />
                    <br /><br />
                    Youtube ID: <input class="linebox" name="youtube_id" type="text" placeholder="youtube id" v-model="song.youtube_id" />
                    <br /><br />
                    <v-btn @click="create">Create</v-btn>
                    <div class="error" v-html="error"></div>
                    <div class="success" v-html="success"></div>
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
import SongsService from '@/services/SongsService'
export default {
    data () {
        return {
            song: {
                title: null,
                artist: null,
                album: null,
                genre: null,
                album_image_url: null,
                youtube_id: null,
                lyrics: null,
                tab: null,
            },
            error: null,
            success: null,
        }
    },
    components: {
        ContentPanel
    },
    methods: {
        async create() {
            try {
                this.success = '';
                this.error = '';
                
                const response = await SongsService.create(this.song);
                this.success = 'New song created';
                this.$router.push({
                    name: 'songs'
                });
            } catch (e) {
                this.error = e.response.data.error;
            }
        }
    }
}

</script>

<style scoped>
.linebox {
    border: 1px solid #0000ff;
    width: 400px;
}
.box {
    border: 1px solid #0000ff;
    width: 400px;
    height: 300px;
}
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