import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io'
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  
  constructor(private socket : Socket) {
    console.log('Hello ChatProvider Provider');
  }

  pSendMessage(data){
    let observable = new Observable( observer =>{
        this.socket.emit('pSendMessage',data,(result)=>{
          observer.next(result)
        })
    })
    return observable;
  }

  pGetMessage(data){
    let observable = new Observable( observer =>{
      this.socket.emit('pGetMessage',data,(result)=>{
        observer.next(result)
      })
    })
    return observable;
  }

  dSendMessage(data){
      this.socket.emit('dSendMessage',data)
  }

  dGetMessage(data){
    let observable = new Observable( observer =>{
      this.socket.emit('dGetMessage',data,(result)=>{
        observer.next(result)
      })
    })
    return observable;
  }

  dLeaveDocument(){
    this.socket.emit('leaveDocument')
  }

}
