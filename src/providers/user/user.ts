import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io'
//import { OnlineuserPage } from '../../pages/onlineuser/onlineuser'
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

	userLogin

  constructor(private socket : Socket) {
  }

  setUser(data){
  	this.userLogin = data
  }

  login(data) {
    let observable = new Observable(observer => {
      this.socket.emit('login', data,(result)=>{
        observer.next(result);
        if(result){
        	localStorage.setItem('isLogin',"true");
        }    
      }); 
    })     
    return observable;
  }
  
  registration(data){
  	let observable = new Observable(observer => {
      this.socket.emit('registration', data,(result)=>{
        observer.next(result);    
      }); 
    })     
    return observable;
  }

  getAllUser(){
  	let observable = new Observable(observer => {
      this.socket.emit('getAllUser',({data:''}),(result)=>{
        observer.next(result);
      }); 
    })
    return observable;    
  }

  getOnlineUser(){
  	let observable = new Observable(observer => {
      this.socket.emit('getOnlineUser',({data:''}),(result)=>{
        observer.next(result);  
      }); 
    })
    return observable;    
  }

  logout(){
  		this.socket.emit('logout',({data:''}))
  	}
}
