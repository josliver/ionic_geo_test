import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';
import { LugaresService } from '../../services/lugares.services';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  // nombreLugar:string = '';
  lugar: any = {}; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public ls:LugaresService) {
    // this.nombreLugar = navParams.get('nombre');
    this.lugar = navParams.get('lugar');
  }

  guardarLugar() {
    console.log(this.lugar);
    this.lugar.id = (!this.lugar.id)?Date.now():this.lugar.id;
    this.ls.createLugar(this.lugar);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

  navigateBack() {
    console.log("Navigate Back Press"); 
    this.navCtrl.pop();
  }

  navigateThird() {
    this.navCtrl.push(TerceraPage);
  }
}
