import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [{
	//首页
	path: "/",
	name: "index",
	component: () => import('@/pages/index.vue')
}];

const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router;