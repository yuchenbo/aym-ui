<template>
    <div class="mui-popup"
        :class="[typeClass]">
        <div :class="{'mui-mask':isVisible}"
            @click="maskClick"
            :style="transparent? transparentStyle :''"></div>
        <div class="mui-popup__container"
            :class="{'mui-popup-show':isVisible}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import apiMixin from '../../common/mixins/api'

export default {
    name: 'm-popup',
    mixins: [apiMixin],
    props: {
        type: {
            type: String,
            default: ''
        },
        mask: {
            type: Boolean,
            default: true
        },
        transparent: {
            type: Boolean,
            default: false
        },
        isShow: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    computed: {
        typeClass() {
            return this.type ? `mui-${this.type}` : ''
        },
        transparentStyle() {
            return 'background-color:rgba(0,0,0,0)'
        }
    },
    methods: {}
}
</script>
<style lang="scss">
@import "../../styles/base/fn";
@import "../../styles/widget/mui-popup/mui-popup";
</style>
