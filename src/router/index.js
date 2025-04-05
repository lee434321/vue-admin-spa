import {
    createRouter,
    createWebHistory
} from 'vue-router'

//const Home = {template: '<div>home</div>'}
const Employee = {
    template: '<div>Employee</div>'
}
const Department = {
    template: '<div>Department</div>'
}
const Product = {
    template: '<div>Product</div>'
}
const Portal = {
    template: '<div>Portal</div>'
}
//根路由
const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/layout'),
    children: [
        {
            path: '/portal',
            name: 'portal',
            component: Portal            
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/dashboard')
        },
        {
            path: '/emp',
            name: 'employee',
            component: Employee
        }, {
            path: '/dept',
            name: 'department',
            component: Department
        }, {
            path: '/prod',
            name: 'product',
            component: Product
        }, {
            path: '/cen',
            name: 'Customer Enquiry',
            component: () => {
                return { template: '<div>Customer Enquiry</div>' }
            }
        }]

}, {
    path: '/404',
    name: '404',
    meta: {
        title: "404",
    },
    component: () => import('@/views/404')
}]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    const routeExists = router.getRoutes().some(route => route.path === to.path);
    console.log(routeExists);
    if (!routeExists) {
        router.push('404');
    }
    console.log('from:', from, 'to', to)
    // ...
    // 返回 false 以取消导航
    // return false
});
export default router