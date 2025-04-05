<!-- eslint-disable no-empty -->
<template>
<ul class="w-menu"  :alt="rid" >    
    <li v-for="item in items"
        :key="item.id" 
        :class="item.children && item.children.length>0 ? 'w-sub-menu':'w-menu-item'">
        <div class="w-sub-menu-holder" v-if="item.children && item.children.length>0" @click.stop="slide($event,item)">
            <i class='icon'>
                <Icon :icon="item.icon"></Icon>
            </i>
            <span class="sub-menu-title">{{ item.name }}</span>
            <i class="w-sub-menu-icon-arrow">
                <Icon icon="tabler:chevron-down" :class="item.id==ticked.id && opened?'opened':''" ></Icon>
            </i>
        </div>
        <div class="route&icon" v-else>            
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
            v-if="item.children && item.children.length > 0 "
            :items = "item.children"            
            :name="item.name"
            :style = "ticked.id && openedId == item.id && autoHeight? { height:'auto'}: subcss(item) "
            @enlarge-height = "test">
        </AsideMenu>
    </li>
</ul>
</template>

<script>
// 引入全局状态变量（这里是用到菜单点击项）
import {store} from '../store.js'
export default {
    name: 'AsideMenu',
    data: () => {        
        return {         
            self:"",   
            ticked: {},
            openedId:'',
            opened:false,            
            autoHeight:false,                       
            selfHeight: 0, //:style="subcss(item)" "autoHeight?{height:'auto'}:subcss(item)"            
        }
    },
    mounted:()=>{
       //console.log(this.$props.items)
    },
    props: {
        msg: String,
        items: Array,
        pid:String||Number,
        id:String||Number,
        rid:String||Number
    },
    methods: {
        test(pid) {
            this.openedId=pid;
            if( pid == this.ticked.id)
                this.autoHeight = true;
            else 
                this.autoHeight=false;
            //console.log('emit',pid,this.ticked.id+this.ticked.name,this.autoHeight);
        },
        calcHeight(item) {
            var h = 0;
            for (let i = 0; i < item.children.length; i++) {
                var sub = item.children[i];
                if (sub.children && sub.children.length > 0) {
                    h += 56;
                } else
                    h += 50;
            }
            return h;
        },
        subcss(item) {
            console.log("subcss:",item.id+":"+item.name)
            if (item.id == store.ticked_stack[0]) {
               // console.log('subcss hit:',item.id+':'+item.name,this.id);
                // let p= this.$parent;
                // while(p){
                //     console.log(p.opened,p.id);
                //     p=p.$parent
                // }                
                return {
                    height: this.calcHeight(item)+ 'px'
                };      
            } else {
                // console.log('subcss rest:',item.id+':'+item.name,"opened?",this.opened);      
                // return {
                //     height: '0px'
                // };    
                     
            }

           // console.log()
            
            // if (item.id == this.ticked.id) {                
            //     h = this.calcHeight(item);                
            //     return {
            //         height: h + 'px'
            //     };
            // }
        },
        slide(sender, item) {   
            console.clear();                
            // 创建点击菜单栈
            if (store.ticked_stack.length > 0) {
                if (store.ticked_stack[0]==item.id) {
                    store.ticked_stack.splice(0,1);                    
                } else {
                    store.ticked_stack=new Array();
                    store.ticked_stack.push(item.id);
                }
            }else{
                store.ticked_stack.push(item.id);
            }            
            
            //
            // if (store.tick_menu_id == item.id) {
            //     store.tick_menu_id="";
            // }
            // else {
            //     store.tick_menu_id=item.id;
            // }

            // this.selfHeight = this.calcHeight(item);
            // if (item.id == this.ticked.id) {                
            //     this.ticked = {};
            // } else {                
            //     this.ticked = item;   
            //     this.opened = true;            
            // }
            // console.log('slide tick',this.ticked.name)     
            
            // this.$emit('enlarge-height',this.pid);            
            //向上遍历,收集菜单点击上下级
            var parent = this.$parent;                 
            while (parent) {
                if (parent && parent.id) {
                    parent.opened=true;
                    store.ticked_stack.push(parent.id);
                }
                if (parent.ticked) {
                    parent.openedId=this.pid;
                    //console.log('parent:',"pid:",this.pid, parent.ticked.id+':'+parent.ticked.name);  
                }                
                parent=parent.$parent;
            }     
            console.log(this.$parent.rid,store.ticked_stack);            
           
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
