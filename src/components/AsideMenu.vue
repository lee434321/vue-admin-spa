<template>
<ul class="w-menu">
    <li v-for="item in items" :key="item.id" :class="item.children.length>0?'sub-menu':'menu-item'">
        <div class="sub-menu-holder" v-if="item.children.length>0" @click.stop.prevent="slide($event,item)">
            <i class='icon'>
                <Icon :icon="item.icon"></Icon>
            </i>
            <span class="sub-menu-title">{{ item.name }}</span>
            <i class='w-sub-menu-icon-arrow'>
                <Icon icon="tabler:chevron-down"></Icon>
            </i>
        </div>
        <div v-else>
            <i class='icon'>
                <Icon :icon="item.icon"></Icon>
            </i>
            <span>{{ item.name }}</span>
        </div>
        <AsideMenu v-if="item.children.length > 0" :items="item.children" :style="{height:(item.id==ticked.id?item.children.length*50:0)+'px'}"></AsideMenu>

    </li>
</ul>
</template>

<script>
export default {
    name: 'AsideMenu',
    data: () => {
        return {
            ticked: {}
        }
    },
    props: {
        msg: String,
        items: Array
    },
    methods: {
        slide(sender, item) {
            //console.log(item.id);
            if (item.id == this.ticked.id) {
                //console.log('up');
                this.ticked = {};
            } else {
                //console.log('down');
                this.ticked = item;
            }
        },
        bindCss() {

        }
    }
}
</script>

<style scoped>
.w-menu {
    width: 100%;
    border-right: none !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;

    .w-menu-item {}

    .w-sub-menu {
        .w-menu-item {

        }
    }
}

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
        background-color: #bea3d4;
    }
}

.sub-menu {
    /* list-style: none; */
    margin: 0;
    padding-left: 0;
    position: relative;
    padding: 0 20px;

    .menu-item {
        padding: 0 20px;
        min-width: 160px;
        height: 50px;
        padding-left: 50px !important;
    }
}

/* w-menu reboot */
.w-menu {
    width: 100%;
    border-right: none !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;

    .w-menu-item {
        line-height: 56px;
        font-size: 14px;
        padding: 0 20px;
    }

    .w-menu-item.w-sub-menu {
        line-height: 56px;
        font-size: 14px;
        padding: 0 20px;
    }

    .w-sub-menu {
        margin: 0;
        line-height: 50px;
        position: relative;
        padding: 0 20px;

        .w-menu-item {
            line-height: 50px;
            padding: 0px !important;
        }

        ul {
            height: 0;
            transition: height 0.27s;
            overflow: hidden;
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

    .w-sub-menu-holder {
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

    .w-sub-menu-icon-arrow {
        text-align: right;
        position: absolute;
        top: 50%;
        right: 5px;
        margin-top: -9px;
        line-height: 1;
        -webkit-transition: -webkit-transform 0.3s;
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        font-size: 12px;
        z-index: inherit;
    }

    li {
        line-height: 56px;
        font-size: 14px;
        padding: 0 20px;
    }    
}
</style>
