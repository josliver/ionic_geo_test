import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { TerceraPage } from '../pages/tercera/tercera';
import { LoginPage } from '../pages/login/login';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { LugaresService } from '../services/lugares.services';
import { AuthService } from '../services/auth.services';

export const firebaseConfig = {
  apiKey: "AIzaSyBNbFvk7VEphcXYZS7t3TRTUMmtrYYZEX8",
  authDomain: "ionicbasis-test.firebaseapp.com",
  databaseURL: "https://ionicbasis-test.firebaseio.com",
  projectId: "ionicbasis-test",
  storageBucket: "ionicbasis-test.appspot.com",
  messagingSenderId: "124969931819"  
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    AboutPage,
    TerceraPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    AboutPage,
    TerceraPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService,
    AuthService
  ]
})
export class AppModule {}
