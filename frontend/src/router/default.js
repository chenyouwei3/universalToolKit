export const defaultRoutes = [
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
        name:"home",
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