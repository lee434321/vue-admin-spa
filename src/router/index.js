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
const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/layout'),
    children: [{
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
    }]
}]

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from) => {
    const routeExists= router.getRoutes().some(route=>route.path===to.path);
    console.log(routeExists);
    console.log('from:',from,'to',to)
    // ...
    // 返回 false 以取消导航
    // return false
  });
export default router