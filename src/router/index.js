import  Vue  from  'vue'
import  Router  from  'vue-router'
import  Layout  from  '@/page/layout'
import  Main  from  '@/page/main'
import  Admin  from  '@/page/admin'
import  Category  from  '@/page/category'
import  Product  from  '@/page/product'
import  Order  from  '@/page/order'
import Login from '@/page/login'

Vue.use(Router)

export  default  new  Router({
    routes:  [
        {
            path:  '/',
            name:  'Layout',
            component:  Layout,
            //  嵌套路由
            children:  [{
                //  这里不设置值，是把main作为默认页面
                path: '/',
                name: 'Main',
                component:  Main
            },{
                path: '/admin',
                name: 'Admin',
                component: Admin
            },{
                path: '/category',
                name: 'Category',
                component: Category
            },{
                path: '/product',
                name: 'Product',
                component: Product
            },{
                path: '/order',
                name: 'Order',
                component: Order
            },{
                path: '/login',
                name: '登录',
                component: Login
              }]
        }
  ]
})