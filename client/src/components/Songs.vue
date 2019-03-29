<template>
    <v-layout column>
    <v-flex xs6 offset-xs3 style="margin-right:25%">
        <content-panel title="Songs">
            <slot>
                <!-- write the content that will appear in the <slot></slot> in the 
                ContentPanel -->
                <p>Well</p>
            </slot>
        </content-panel>
    </v-flex>
</v-layout>
</template>

<script>
import ContentPanel from '@/components/ContentPanel'
export default {
    components: {
        ContentPanel
    }
}
</script>
<style scoped>

</style>


