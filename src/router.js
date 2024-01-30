import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./components/Home.vue"
import GalleryViewer from "./views/GalleryViewer.vue";
import Navigator from "./views/Navigator.vue";
import Precios from "./views/Precios.vue"

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
				component: GalleryViewer,
			},
			{
				path:'/retratos/:category',
				component: Precios
			}

			
		]
	},
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;