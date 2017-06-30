<template>
    <transition name="fade">
        <div id="editImg" class="editImg-wrap" :style="{height:`${editorHeight}px`}" v-show="isShow">
            <mt-header title="图片编辑">
                <div slot="left">
                    <mt-button @click="restoreImg">撤销</mt-button>
                </div>
                <div slot="right">
                    <mt-button @click="save">保存</mt-button>
                </div>
            </mt-header>

            <loading ref="editInstance" @imgChanged="imgChanged"></loading>

        </div>
    </transition>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import getCropitData from '../../../service/getCropitData.js';

    export default {
        data: () => ({
            editorHeight: window.innerHeight,
            imgIsChanged: false
        }),

        computed: mapState({
            isShow: ({editImgModule}) => editImgModule.isShow,
            customParams: ({editImgModule}) => editImgModule.customParams,
        }),

        props: [],

        methods: {
            save(){
                let {
                    imgIsChanged:cropit,
                    $store:{
                        commit
                    }
                } = this;

                let postData = getCropitData({"size": "500*500", "type": "kuanghua",cropit}, this.customParams);

                this.$emit('editFinish', {postData, imgData: $('#image-cropper').cropit('export')});

                commit('hideEditor');
            },
            restoreImg(){
                this.$refs.editInstance.restore()
            },
            imgChanged(){
                this.imgIsChanged=true;
            }
        },

        beforeCreate(){
            const vm = this;
            this.$store.registerModule(
                'editImgModule',
                {
                    state: {
                        isShow: false,
                        imgSrc: '',
                        imgSize: {
                            width: 200,
                            height: 200
                        },
                        initialCrop: false,
                        customParams: false
                    },
                    mutations: {
                        showEditor(state, payload){
                            Object.assign(state, payload, {isShow: true});
                        },
                        hideEditor(state){
                            state.imgSrc = '';
                            state.isShow = false;
                        },
                        clearImgSrc(state){
                            state.imgSrc = '';
                        },
                        selectPreview(){
                            vm.$emit('selectPreview');
                        }
                    }
                }
            );
        }
    }
</script>

<style>
    .editImg-wrap {
        position: fixed;
        width: 100%;
        background: #fff;
        top: 0;
        left: 0;
        z-index: 9999
    }
</style>