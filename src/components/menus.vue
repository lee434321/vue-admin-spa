<template>
<ul class="menu">

    <li v-for="item in items" :key="item.id" :class="item.children.length>0?'sub-menu':'menu-item'">
        <div class="sub-menu-holder" v-if="item.children.length>0" @click.stop.prevent="slide($event,item)">
            <i class='icon'></i>
            <span class="sub-menu-title">{{ item.name }}</span>
            <i class='sub-menu-icon-arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"></path>
                </svg>
            </i>
        </div>
        <div v-else>
            <i class='icon'></i>
            <span>{{ item.name }}</span>
        </div>        
        <menus v-if="item.children.length > 0" :items="item.children" :style="{height:(item.id==tickd.id?item.children.length*50:0)+'px'}"></menus>
        
    </li>
</ul>
</template>

<script>
export default {
    name: 'menus',
    data: () => {
        return {
            info: "test",
            tickd: {}
        }
    },
    props: {
        msg: String,
        items: Array
    },
    methods: {
        slide(sender, item) {
            this.tickd = item;
        }
    }
}
</script>

<style scoped>
.menu {
    /* background: darkkhaki; */
    width: 100%;
    border-right: none !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}

.menu-item {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;

    &:hover {
        background-color:#bea3d4;
    }
}

.icon {
    line-height: 1;
    /* 使用1可以垂直居中 */
    display: inline-block;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
}

.sub-menu {
    /* list-style: none; */
    margin: 0;
    padding-left: 0;
    position: relative;

    .sub-menu-title {
        height: 56px;
        line-height: 56px;
        font-size: 14px;
        color: #303133;
        padding: 0 20px;
        cursor: pointer;
        position: relative;
        -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        white-space: nowrap;

    }

    .menu-item {
        padding: 0 20px;
        min-width: 160px;
        height: 50px;
        padding-left: 50px !important;
    }
}

.sub-menu ul {
    height: 0;
    transition: height 0.37s;
    overflow: hidden;
}

.sub-menu-icon-arrow {
    text-align: right;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -9px;
    line-height: 1;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    font-size: 12px;
    z-index: inherit;
}

.sub-menu-holder {
    position: relative;
    z-index: 100;
    cursor: pointer;

    &:hover {
        background-color: #bea3d4;
    }

    *,
    i {
        z-index: -100;
    }
}

.slidedown {
    transition: height 2s;
    height: auto;
}
</style>
