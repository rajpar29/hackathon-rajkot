import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import { HomePage } from './home/home.page';
import { TabsPagePage } from './tabs-page/tabs-page.page';
import { ErrorPage } from './error/error.page';
import { LoginPage } from './login/login.page';

import { DatabaseService } from './services/database.service';
import { ProductItemComponent } from './product-list/product-item/product-item.component';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ImagePreloaderDirective } from './directives/image-preloader.directive';



const config = {
  apiKey: "AIzaSyBGi2O7pqj7VM5eGzs-_RGE9JdvW_p1J3k",
    authDomain: "ceramicapp-2a5ce.firebaseapp.com",
    databaseURL: "https://ceramicapp-2a5ce.firebaseio.com",
    projectId: "ceramicapp-2a5ce",
    storageBucket: "ceramicapp-2a5ce.appspot.com",
    messagingSenderId: "365996277535"
};
//
@NgModule({
  declarations: [AppComponent, ImagePreloaderDirective              
  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    DatabaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
