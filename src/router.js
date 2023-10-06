import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./components/Home.vue"
import GalleryViewer from "./views/GalleryViewer.vue";
import Navigator from "./views/Navigator.vue";
const routes = [
	{
		path: "/",
		name:"root",
		component: Home,
		
		children:[
			{
				path:'/:category',
				component: Navigator
			},
			{
				path:'/gallery/:category',
				name:"gallery",
				component: GalleryViewer,
			},
			
		]
	},
];
let router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;