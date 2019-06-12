import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { DeAuthGuard } from './core/de-auth.guard';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: '', component: CreateProductComponent, canActivate: [AuthGuard]},
  { path: 'browseProduct', component: ProductListComponent, canActivate: [AuthGuard]},
 {path:'id', component: ProductDetailComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'createProduct', component: CreateProductComponent, canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent},
  { path: 'orders', component: OrderListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
