<template>
<ul class="w-menu" >    
    <li v-for="item in items" :key="item.id" :class="item.children.length>0?'w-sub-menu':'w-menu-item'">
        <div class="w-sub-menu-holder" v-if="item.children.length>0" @click.stop="slide($event,item)">
            <i class='icon'>
                <Icon :icon="item.icon"></Icon>
            </i>
            <span class="sub-menu-title">{{ item.name }}</span>
            <i class="w-sub-menu-icon-arrow">
                <Icon icon="tabler:chevron-down" :class="item.id==ticked.id && opened?'opened':''" >
                </Icon>
            </i>
        </div>
        <div v-else>            
            <RouterLink :to="item.route" v-if="item.route">
                <i class='icon'><Icon :icon="item.icon"></Icon></i>
                <span>{{ item.name }}</span>
            </RouterLink> 
            <div v-else> 
                <i class='icon'><Icon :icon="item.icon"></Icon></i>
                <span >
                    {{ item.name }}
                </span>
            </div>            
        </div>
        <AsideMenu 
            v-if="item.children.length > 0 "
            :items = "item.children"      
            :pid="item.id" 
            :style = "ticked.id && openedId==item.id && autoHeight?{height:'auto'}:subcss(item)"
            @enlarge-height = "test">
        </AsideMenu>
    </li>
</ul>
</template>

<script>
/*
待处理：
1.slide menu mutex process
*/
export default {
    name: 'AsideMenu',
    data: () => {        
        return { 
            ticked: {},
            openedId:'',
            opened:false,            
            autoHeight:false,                       
            selfHeight: 0, //:style="subcss(item)" "autoHeight?{height:'auto'}:subcss(item)"            
        }
    },
    mounted:()=>{
       //console.log('mounted')    
    },
    props: {
        msg: String,
        items: Array,
        pid:String
    },
    methods: {
        bubble(){},
        test(pid) {
            this.openedId=pid;
            if( pid == this.ticked.id)
                this.autoHeight = true;
            else 
                this.autoHeight=false;
            console.log('emit',pid,this.ticked.id+this.ticked.name,this.autoHeight);
        },
        calcHeight(item) {
            var h = 0;
            for (let i = 0; i < item.children.length; i++) {
                var sub = item.children[i];
                if (sub.children.length > 0) {
                    h += 56;
                } else
                    h += 50;
            }
            return h;
        },
        subcss(item) {            
            console.log('subcss',item.name,item.id,this.ticked.id);
            var h = 0;
            if (item.id == this.ticked.id) {
                h = this.calcHeight(item);                                                                
                //this.$emit('enlarge-height',this.pid)
                return {
                    height: h + 'px'
                };
            }
        },
        slide(sender, item) {   
            console.clear();         
            this.selfHeight=this.calcHeight(item);
            if (item.id == this.ticked.id) {
                //console.log('up');
                this.ticked = {};
            } else {
                //console.log('down');                
                this.ticked = item;   
                this.opened = true;            
            }
            this.$emit('enlarge-height',this.pid);

            console.log('slide tick',this.ticked.name)
            var parent = this.$parent;
            // 向上遍历            
            while (parent) {
                if (parent.ticked) {
                    console.log('parent:',parent.ticked.name);    
                }                
                parent=parent.$parent;
            }            
        }
    }
}
</script>

<style scoped>

a{
    text-decoration: none;
}

/* 
w-menu reboot 
*/
.w-menu {
    font-size: 12px !important;
    width: 100%;
    border-right: none !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    box-sizing: border-box;

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
        font-weight: 600;
        padding: 0 20px;
        box-sizing: border-box;  
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
        
        .opened{
            transform: rotate(180deg);
            transition: transform 0.3s;
        }
    }

    li {
        line-height: 56px !important;

        padding: 0 20px;
        text-wrap: nowrap;

        div {
            width: 100%;
            overflow: hidden;
        }

        .w-menu-item {
            line-height: 50px !important;          
        }       
    }
    .w-sub-menu{
        padding:0;
    }       
    ul {
        height: 0;
        transition: height 0.27s;
        overflow: hidden;
    }

    /*菜单hover效果*/
    li.w-menu-item,.w-sub-menu-holder{
        &:hover {
            background-color: #bea3d4;
        }
    }

}
</style>
