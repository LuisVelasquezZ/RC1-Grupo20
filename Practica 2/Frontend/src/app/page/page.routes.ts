import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductosComponent } from "./productos/productos.component";

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
    },
    {
        path: 'productos',
        component: ProductosComponent,
        data: { titulo: 'Productos' }
    },
    {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
    },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );