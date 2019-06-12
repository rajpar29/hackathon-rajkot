import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { ProductDetailPage } from './product-list/product-detail/product-detail.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'error', loadChildren: './error/error.module#ErrorPageModule' },
  { path: 'tabs-page', loadChildren: './tabs-page/tabs-page.module#TabsPagePageModule'},
  { path: 'id', loadChildren: './product-list/product-detail/product-detail.module#ProductDetailPageModule' , canActivate: [AuthGuard]},
  { path: 'user', loadChildren: './user/user.module#UserPageModule' , canActivate: [AuthGuard] },
  { path: 'cart', loadChildren: './user/cart/cart.module#CartPageModule' , canActivate: [AuthGuard] },
  { path: 'buy', loadChildren: './buy/buy.module#BuyPageModule' , canActivate: [AuthGuard] },
  { path: 'my-orders', loadChildren: './user/my-orders/my-orders.module#MyOrdersPageModule' , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

