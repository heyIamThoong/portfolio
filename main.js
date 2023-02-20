import { render, router } from './src/lib/index';
import HomePage from './src/client';
import ProjectListAdmin from './src/admin/ProjectListAdmin';
import projectAddAdmin from './src/admin/ProjectAddAdmin';
import projectEditAdmin from './src/admin/ProjectEditAdmin';
import Login from './src/admin/Login';
const app = document.querySelector("#top");
router.on("/",()=>render(HomePage,app));
router.on("admin/projectListAdmin",()=>render(ProjectListAdmin,app));
router.on("/admin/projectAddAdmin", ()=>render(projectAddAdmin, app));
router.on("/admin/projectEditAdmin/:id", ({data})=> render(()=>projectEditAdmin(data),app));
router.on("#/admin/login", ()=>render(Login, app));
router.resolve(); 