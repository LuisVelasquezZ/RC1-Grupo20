import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { PageComponent } from './page/page.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    loadChildren: './page/page.module#PageModule'
    
  },
  { 
    path: '**', 
    component: NoPageFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
