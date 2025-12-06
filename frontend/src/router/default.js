import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
		path:'/',
		redirect:'/home'
	},
	/*---------------------默认功能页面---------------------*/
	{
		name:"404",
		path:"/404",
		meta:{
			title:"404"
		},
		component: () => import("@/views/404.vue")
	},
    {
        name:"Home",
        path:"/home",
        meta:{
            title:"首页"
        },
        component: () => import("@/views/home.vue")
    },
	// 捕获所有未匹配的路由，重定向到 404 页面
	{
		path: "/:pathMatch(.*)*",
		redirect: "/404"
	}
]

const router = createRouter({
	//使用url的#符号之后的部分模拟url路径的变化,因为不会触发页面刷新,所以不需要服务端支持
	//history: createWebHashHistory(), 
	history: createWebHistory(),
	routes
})

export default router