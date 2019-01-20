
import { Component, ViewChild  } from '@angular/core';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat'
import { UserProvider } from '../../providers/user/user'
import { Socket } from 'ng-socket-io'
import JQuery from 'jquery'
/**
 * Generated class for the ChatprivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatprivate',
  templateUrl: 'chatprivate.html',
})
export class ChatprivatePage {

  messages=[]
  message=''
  to
  from
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private chat :ChatProvider,
      private user : UserProvider,
      private socket : Socket) {
    
    this.from = this.user.userLogin;


   this.socket.on('pUpdateMessage',(data) => {
        console.log(data)
        this.messages.push(data)
        this.content.scrollToBottom(300);
    });  
    
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatprivatePage');
    this.to=this.navParams.get('target')

    this.chat.pGetMessage({to:this.to,from:this.from}).subscribe(result=>{
        console.log(Object.keys(result).length)
        for(let i = Object.keys(result).length-1;i>=0;i--){
           this.messages.push(result[i])
         }       
    });
    this.content.scrollToBottom(300);
  }

  sendMessage(){
    let data = {text:this.message,to:this.to,from:this.from}
    this.chat.pSendMessage(data).subscribe(result=>{
      this.messages.push(result);
    })
    this.content.scrollToBottom(300);
  }
}
