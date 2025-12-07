export const facebookRoutes = [
	{
		name:"facebook_pay",
		path:"/facebook_pay",
		meta:{
			title:"facebook_pay"
		},
		component: () => import("@/views/facebook/facebook_pay.vue")
	}
]