<template>
<div>
    <p>{{info}}</p>
    <div v-for="(item,key) in items">      
        {{item.children.length}} 
        
    </div>
</div>
</template>

<script>
export default {
    name: 'menus',
    data: () => {
        return {
            info: "test"
        }
    },
    props: {
        msg: String,
        items: Array
    }
}
</script>
