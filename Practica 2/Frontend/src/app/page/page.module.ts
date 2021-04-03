import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './page.routes';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    PageComponent,
    DashboardComponent,
    ProductosComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class PageModule { }
