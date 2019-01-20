import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DocumentProvider } from '../../providers/document/document'
import { UserProvider } from '../../providers/user/user'
/**
 * Generated class for the CreateDocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-document',
  templateUrl: 'create-document.html',
})
export class CreateDocumentPage {

title=''
password=''
description=''
owner
  constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		public document: DocumentProvider,
  		public user: UserProvider,
  		private alertCtrl :AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateDocumentPage');
    this.owner = this.user.userLogin
  }

  createDocument(){
  		let data = {title:this.title,password:this.password,description:this.description,owner:this.owner}
  		this.document.createDocument(data).subscribe(result=>{
  			if(result){

				let alert = this.alertCtrl.create({
				title: 'Success',
				subTitle: 'Document created!',
				buttons: ['Ok']
				});
				alert.present()
  			
  			}else{

  				let alert = this.alertCtrl.create({
				title: 'Failed',
				subTitle: 'Document already taken',
				buttons: ['Ok']
				});
				alert.present()

  			}


  		});
  }

}
