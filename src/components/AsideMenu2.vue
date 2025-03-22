<template>
    <ul>
        <li v-for="item in items" :key="item.id" >
            <AsideMenu2 v-if="item.children.length>0" 
                :items="item.children" 
                :rid="item.id">
            </AsideMenu2>
            <span v-else>{{ item.name }}</span>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'AsideMenu2',
    props:{
        items:Array,
        rid:String
    }
}
</script>