import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
     MyOrdersComponent,
     AdminProductsComponent,
     AdminOrdersComponent,
     ShoopingCartComponent,
     LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
