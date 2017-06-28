<template>
    <div id="editImg" class="editImg-wrap" :style="{height:editorHeight+'px'}" v-show="isShow">
        <mt-header title="图片编辑">
            <router-link to="/" slot="left">
                <mt-button>撤销</mt-button>
            </router-link>
            <div to="/" slot="right">
                <mt-button @click="save">保存</mt-button>
            </div>
        </mt-header>

        <loading :img-src="imgSrc" :edit-finish="editFinish" :img-size="imgSize" :get-cropit="getCropit"></loading>

    </div>

</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        data: () => ({
            editorHeight: window.innerHeight,

            getCropit(instance){
                console.log('函数',this);
                this.cropitInstance=instance
            },

            cropitInstance:''
        }),

        computed: mapState({
            isShow: ({editImgModule}) => editImgModule.isShow,
            imgSrc: ({editImgModule}) => editImgModule.imgSrc,
            editFinish: ({editImgModule}) => editImgModule.editFinish,
            imgSize: ({editImgModule}) => editImgModule.imgSize
        }),

        props: [],

        methods: {
            save(){
                let {
                    commit,
                    state: {
                        editImgModule: {
                            editFinish
                        }
                    }
                } = this.$store;
                commit('hideEditor');

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

                //editFinish(postData);

                console.log(this.cropitInstance);

                this.$emit('editFinish', postData);

                commit('clearImgSrc');
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
                        }
                    },
                    mutations: {
                        showEditor(state, payload){
                            Object.assign(state, payload, {isShow: true});
                        },
                        hideEditor(state){
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
        left: 0
    }
</style>