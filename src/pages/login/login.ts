import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthService } from "../../services/auth.services";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl: ViewController, private loginSrv: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFB() {
    this.loginSrv.loginWithFacebook().then((response)=> { 
      console.log(JSON.stringify(response));
      this.viewCtrl.dismiss();
      localStorage.setItem('LoginData', JSON.stringify(response));
    }); 
  }
  cancelar() {
    this.viewCtrl.dismiss();

  }

}
