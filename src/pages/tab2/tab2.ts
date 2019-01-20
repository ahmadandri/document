import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the Tab2Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html'
})
export class Tab2Page {

  editdocumentRoot = 'EditdocumentPage'
  chatdocumentRoot = 'ChatdocumentPage'


  constructor(public navCtrl: NavController) {}

}
