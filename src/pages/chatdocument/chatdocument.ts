import { Component, ViewChild  } from '@angular/core';
import { App, Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat'
import { UserProvider } from '../../providers/user/user'
import { DocumentProvider } from '../../providers/document/document'
import { Tab1Page } from '../../pages/tab1/tab1'
import { LoginPage } from '../../pages/login/login'
import { Socket } from 'ng-socket-io'

/**
 * Generated class for the ChatdocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatdocument',
  templateUrl: 'chatdocument.html',
})
export class ChatdocumentPage {
nav
messages=[]
message=''
to
from
loginUser
@ViewChild(Content) content: Content;
  
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private chat :ChatProvider,
      private user : UserProvider,
      private document : DocumentProvider,
      private socket : Socket,
      private app : App) {
  	
  	this.to=this.document.currentDocument

  	this.from = this.user.userLogin
    this.socket.on('dUpdateMessage',(result)=>{
      this.messages.push(result);
    })
  }

 ionViewDidLoad() {
  this.loginUser = this.user.userLogin;
    console.log(this.user.userLogin)
    if(!this.user.userLogin){
      this.nav = this.app.getRootNavById('n4');
      this.nav.setRoot(LoginPage)
    }else{
      this.chat.dGetMessage(this.to).subscribe(result=>{
        for(let i = Object.keys(result).length-1;i>=0;i--){
           this.messages.push(result[i])
         } 
      })
    }
  }

  back(){
    this.nav = this.app.getRootNavById('n4');
    this.nav.setRoot(Tab1Page)
  }

  sendMessage(){
    let data = {text:this.message,to:this.to,from:this.from}
    this.message=''
    this.chat.dSendMessage(data)
  }

}
