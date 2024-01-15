import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./components/Home.vue"
import GalleryViewer from "./views/GalleryViewer.vue";
import Navigator from "./views/Navigator.vue";
import Compras from "./views/Compras.vue";
const routes = [
	{
		path: "/",
		name:"root",
		component: Home,
		
		children:[
			{
				path:'/:page',
				component: Navigator
			},
			{
				path:'/gallery/:category',
				component: GalleryViewer,
			},
			{
				path:'/gallery/:category/:id',
				component: Compras
			}
			
		]
	},
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;