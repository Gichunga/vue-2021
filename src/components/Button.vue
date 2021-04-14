<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{ text }}</button>
</template>

<script> 
export default {
    name:'Button',
    props: {
        text: String,
        color: String,
       
    },
    methods: {
        onClick(){
            // console.log('clicked me');
            this.$emit('button-clck')
        }
    }
}
</script>

<style scoped>
    button {
        background: #181818;
        color: #fff;
    }
</style>