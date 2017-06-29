<template>
    <transition name="fade">
        <div id="editImg" class="editImg-wrap" :style="{height:`${editorHeight}px`}" v-show="isShow">
            <mt-header title="图片编辑">
                <router-link to="/" slot="left">
                    <mt-button>撤销</mt-button>
                </router-link>
                <div to="/" slot="right">
                    <mt-button @click="save">保存</mt-button>
                </div>
            </mt-header>

            <loading></loading>

        </div>
    </transition>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        data: () => ({
            editorHeight: window.innerHeight
        }),

        computed: mapState({
            isShow: ({editImgModule}) => editImgModule.isShow,
        }),

        props: [],

        methods: {
            save(){
                let {
                    commit
                } = this.$store;

                var cropitData = build(),
                    postData = {},
                    extraPostData = {"size": "500*500", "type": "kuanghua"};
                ;
                for (var cpData in cropitData) {//遍历json对象的每个key/value对,p为key
                    postData[cpData] = cropitData[cpData];
                }
                for (var extraData in extraPostData) {//遍历json对象的每个key/value对,p为key
                    postData[extraData] = extraPostData[extraData];
                }


                this.$emit('editFinish', {postData, imgData: $('#image-cropper').cropit('export')});

                console.log(JSON.stringify(postData));
                commit('hideEditor');
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
                        initialCrop:false
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