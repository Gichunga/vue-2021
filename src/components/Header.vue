<template>
    <header>
       <h1>{{ title }}</h1>

       <!-- You pass the props from the parent compontnt to the child component -->
       <!-- Then the child component will validate the type of the component being passed -->
       <Button :text="showForm ? 'Close' : 'Add Task'" :color="showForm ? 'red' : 'green'" @button-clck="$emit('toggle-add-task')"/> 
    </header>
</template>

<script> 
import Button from './Button'

export default {
    name:'Header',
    
    // register components
    components: {
        Button,
    },
    props: {
        title: {
            type: String,
        },
        showForm: Boolean,
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>