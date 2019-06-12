import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';



import { CoreModule } from './core/core.module';
import { ErrorComponent } from './error/error.component';
import { CreateProductComponent } from './create-product/create-product.component';

import { DatabaseService } from './services/database.service';
import { UploadImagesComponent } from './create-product/upload-images/upload-images.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { FileSizePipe } from './file-size.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderItemComponent } from './order-list/order-item/order-item.component';



const config = {
    apiKey: "AIzaSyBGi2O7pqj7VM5eGzs-_RGE9JdvW_p1J3k",
    authDomain: "ceramicapp-2a5ce.firebaseapp.com",
    databaseURL: "https://ceramicapp-2a5ce.firebaseio.com",
    projectId: "ceramicapp-2a5ce",
    storageBucket: "ceramicapp-2a5ce.appspot.com",
    messagingSenderId: "365996277535"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ErrorComponent,
    CreateProductComponent,
    UploadImagesComponent,
    DropzoneDirective,
    FileSizePipe,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    OrderListComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CoreModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
