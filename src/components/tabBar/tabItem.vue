<template>
    <div class="tab-item" @click="itemClick">
        <div :style="initactiveColor">
        <slot name="item-icon"></slot>
        <slot name="item-name"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabItem",
        props:{
            path:String,
            activeColor:String,
        },
        computed:{
            initactiveColor(){
                return this.$route.path==this.path?{color:this.activeColor}:{};
            }
        },
        methods:{
            itemClick(){
                this.$router.replace(this.path);
                //console.log(this.path);
            }
        }
    }
</script>

<style scoped>
    .tab-item{
        flex: 1;
        height: 49px;
        text-align: center;
        font-size:13px ;

    }
    .tab-item img{
        width:24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }

</style>