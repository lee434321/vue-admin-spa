<template>
<div id="wrapper">
    <aside class="sidebar" :class="{ collpased: collapsed }">
        <nav>
            <h3 class="logo">Vue Admin Spa</h3>
            <ul class="menu">
                <li class="menu-item">
                    <i class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm10-4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                        </svg>
                    </i>
                    <span class="menu-item-title">
                        <RouterLink to="/emp">Employee</RouterLink>
                    </span>
                </li>
                <li class="menu-item">
                    <i class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m13.666 1.429l6.75 3.98q.1.06.18.133l.009.008l.106.075a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808l6.775-3.995a3.34 3.34 0 0 1 3.24.015m-.64 5.343a2.03 2.03 0 0 0-2-.014L8.002 8.562A1.99 1.99 0 0 0 7 10.298v3.278a2 2 0 0 0 1.03 1.75l2.946 1.89c.657.367 1.39.367 1.994.033l3.054-1.955c.582-.322.976-.992.976-1.719v-3.277l-.005-.164a2 2 0 0 0-.725-1.391l-.092-.07l-.056-.047a1 1 0 0 0-.096-.064z" />
                        </svg>
                    </i>
                    <RouterLink to="/dept">Department</RouterLink>
                </li>
                <li class="menu-item">
                    <i class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9M9 15.075l6-6m-6 .03v.015m6 6v.015" />
                        </svg>
                    </i>
                    <RouterLink to="/prod">Product</RouterLink>
                </li>
            </ul>
            <menus :items="menu_tree"></menus>
        </nav>
    </aside>
    <main class="content-wrapper">
        <header>
            <svg class="toogle-btn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18" @click="toggleSiderBar">
                <path d="M85.333 256A42.667 42.667 0 0 1 128 213.333h768a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 256zm0 256A42.667 42.667 0 0 1 128 469.333h512a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 512zm0 256A42.667 42.667 0 0 1 128 725.333h768a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 768z">
                </path>
            </svg>
            <a class="animated fadeIn">Hi,[lizw阿玮]</a>
        </header>
        <router-view class="dynamic-view"></router-view>
        <footer>footer area {{ msg }}</footer>
    </main>
</div>
</template>

<script>
import menus from '@/components/menus.vue';
export default {
    name: "layout",
    components: {
        menus
    },
    data: function () {
        return {
            msg: 'test',
            collapsed: false,
            menu_items: [{
                    id: 1,
                    name: 'workshop1',
                    pid: 0
                },
                {
                    id: 2,
                    name: 'workshop2',
                    pid: 0
                },
                {
                    id: 3,
                    name: 'workshop3',
                    pid: 0
                },
                {
                    id: 4,
                    name: 'ws-11',
                    pid: 1
                },
                {
                    id: 5,
                    name: 'ws-12',
                    pid: 1
                },
                {
                    id: 6,
                    name: 'ws-21',
                    pid: 2
                },
                {
                    id: 7,
                    name: 'ws-211',
                    pid: 6
                },
                {
                    id: 8,
                    name: 'ws-31',
                    pid: 3
                },
                {
                    id: 9,
                    name: 'ws-32',
                    pid: 3
                }
            ],
            menu_tree: [{
                id: 1,
                name: 'workshop1',
                children: [{
                        id: 4,
                        name: 'ws-11',
                        children: []
                    },
                    {
                        id: 5,
                        name: 'ws-12',
                        children: []
                    }
                ]
            }, {
                id: 2,
                name: 'workshop2',
                children: [{
                    id: 6,
                    name: 'ws-21',
                    children: [{
                        id: 7,
                        name: 'ws-211',
                        children: []
                    }, {
                        id: 9,
                        name: 'ws-32',
                        children: []
                    }]
                }]
            }, {
                id: 3,
                name: 'workshop3',
                children: [{
                    id: 8,
                    name: 'ws-31',
                    children: []
                }]
            }]
        }
    },
    methods: {
        toggleSiderBar() {
            console.log('invoke toogle sidebar');
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style lang="scss" scoped>
#wrapper {
    display: flex;

    aside {
        box-sizing: border-box;
        width: var(--sidebar-width);
        height: 100vh;
        z-index: 5;
        transition: all 0.3s;
        background: #fff;
        overflow: hidden;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

        &.collpased {
            width: var(--sidebar-collapsed-width);
            transition: all 0.3s;
        }

        nav {
            ul{
                position: relative;                
            }

            li {
                list-style: none;
                position: relative;
                background-color: coral;           
            }
        }
    }

    main.content-wrapper {
        position: relative;
        background: #f8f8f8;
        min-height: 100vh;
        transition: all 0.3s;
        width: 100%;

        .dynamic-view {
            padding: 15px 15px 60px 15px;
        }
    }

    header {
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #efefef;
        background: #fff;
        color: #353d47;
        padding: 0px 15px;
        z-index: 4;
        box-sizing: border-box;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;

        svg {
            margin-right: 5px;
            cursor: pointer;
        }

        a {
            line-height: 60px;
        }

    }

    footer {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 14px;
    }
}

/* logo */
.logo {
    color: #333;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    padding: 18px 0;
    margin: 0;
    height: 60px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
}

/* menu structure*/
a {
    text-decoration: none;
}

.menu {
    // background: darkkhaki;
    width: 100%;
    border-right: none !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}

.sub-menu {
    // list-style: none;
    margin: 0;
    padding-left: 0;

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

    .sub-menu-icon-arrow {
        position: absolute;
        top: 50%;
        right: 20px;
        margin-top: -9px;
        line-height: 1;
        -webkit-transition: -webkit-transform 0.3s;
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        font-size: 12px;
    }

    ul {
        height: 0px;
        overflow: hidden;
    }

    .menu-item {
        padding: 0 20px;
        min-width: 160px;
        height: 50px;
        padding-left: 50px !important;
    }
}

.is-opened {
    display: block;
    transition: all 2s;
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
}

.icon {
    line-height: 1; //使用1可以垂直居中
    display: inline-block;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
}

.menu-item-title {
    display: inline;
}
</style>
