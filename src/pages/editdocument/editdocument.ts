import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PlatformLocation } from '@angular/common' 
import { Tab1Page } from '../../pages/tab1/tab1'
import { LoginPage } from '../../pages/login/login'
import { EditPage } from '../../pages/edit/edit'
import { Socket } from 'ng-socket-io'
import { UserProvider } from '../../providers/user/user'
import { ChatProvider } from '../../providers/chat/chat'

/**
 * Generated class for the EditdocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdocument',
  templateUrl: 'editdocument.html',
})
export class EditdocumentPage {
  nav
  title
  constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
  		private location :PlatformLocation,
  		private app: App,
  		private userProvider: UserProvider,
  		private chatProvider : ChatProvider,
  		private platform : Platform,
  		private socket : Socket ) {

		this.platform.registerBackButtonAction(()=>{
			this.app.getRootNav().setRoot(Tab1Page)
		});

		
		this.socket.on('getData',(result)=>{
		  this.title = result[0].title
        });
        

  }


	  public options: Object = {
	    charCounterCount: true,
	    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
	    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
	    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
	    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
	    events : {
	    }
	  };

	back(){
		this.nav = this.app.getRootNavById('n4');
		this.nav.setRoot(Tab1Page)
		this.chatProvider.dLeaveDocument();
	}		


	ionViewDidLoad() {
		this.location.onPopState(()=>{
			this.nav=this.app.getRootNavById('n4')
			this.nav.setRoot(Tab1Page)
		});

		if(!this.userProvider.userLogin){
	      this.navCtrl.setRoot(LoginPage)
	    }
	}
	edit(){
		this.navCtrl.setRoot(EditPage)
	}

}
