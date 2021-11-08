import { NgModule } from '@angular/core';
import {Routes ,RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';


const routes:Routes=[
  {path: 'products', component :ProductsComponent},
  {path: 'orders', component :MyOrdersComponent},
  {path: 'admin/orders', component :AdminOrdersComponent},
  {path: 'admin/products', component :ProductsComponent},
  {path: 'shooping-cart', component :ShoopingCartComponent},
  {path: 'Login', component :LoginComponent}
]

@NgModule({
  imports: [RouterModule .forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
