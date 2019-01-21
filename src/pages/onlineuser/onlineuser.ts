import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user'
import { LoginPage } from '../../pages/login/login'
import { ChatprivatePage } from '../../pages/chatprivate/chatprivate'
import { Socket } from 'ng-socket-io'
/**
 * Generated class for the OnlineuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onlineuser',
  templateUrl: 'onlineuser.html',
})
export class OnlineuserPage {'
	allUser=[]
	onlineUser=[]
  loginUser
  user: string = "alluser";
  constructor(public navCtrl: NavController,
  		public navParams: NavParams,
        private userProvider : UserProvider,
        public app : App,
        private socket : Socket) {
    
          this.socket.on('newUser', () => {
            this.getUser()
          });
  }

  ionViewWillEnter() {
  	console.log(this.userProvider.userLogin)
    if(!this.userProvider.userLogin){
      this.navCtrl.setRoot(LoginPage)
      this.allUser=[]
      this.onlineUser=[]
    }else{
      this.getUser()
    }
  }

  getUser(){
    this.userProvider.getAllUser().subscribe(result=>{
      this.allUser= result['user']
      this.onlineUser = result['online']
    })
    this.loginUser =  this.userProvider.userLogin
  }

  chat(data){
    this.navCtrl.push(ChatprivatePage,{target:data});
  }
}
