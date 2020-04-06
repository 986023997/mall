<template>
    <div class="tab-item">
        <slot name="item-icon"></slot>
        <slot name="item-name"></slot>
    </div>
</template>

<script>
    export default {
        name: "tabItem"
    }
</script>

<style scoped>
    .tab-item{
        flex: 1;
        height: 49px;
        text-align: center;

    }

</style>