import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Tab1Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html'
})
export class Tab1Page {

  homeRoot = 'HomePage'
  onlineuserRoot = 'OnlineuserPage'


  constructor(public navCtrl: NavController) {}

}
