<template>
    <div id="wrapper">
        <aside class="sidebar" :class="{ collpased: collapsed }">
            <nav>
                <ul>
                    <li>
                        <i>icon</i>
                        <RouterLink to="/emp">Employee</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/dept">Department</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/prod">Product</RouterLink>
                    </li>
                </ul>
            </nav>
        </aside>
        <main class="content-wrapper">
            <header>
                <svg class="toogle-btn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18"
                    height="18" @click="toggleSiderBar">
                    <path
                        d="M85.333 256A42.667 42.667 0 0 1 128 213.333h768a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 256zm0 256A42.667 42.667 0 0 1 128 469.333h512a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 512zm0 256A42.667 42.667 0 0 1 128 725.333h768a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 768z">
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
export default {
    name: 'layout',
    data: function () {
        return {
            msg: 'test',
            collapsed: false
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
        width: calc(100% - 200px);

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
</style>