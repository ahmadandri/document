import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io'
import { UserProvider } from '../../providers/user/user'
/*
  Generated class for the DocumentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DocumentProvider {
	

	currentDocument

  constructor(private socket : Socket , private UserProvider : UserProvider) {

    console.log('Hello DocumentProvider Provider');
    console.log('Hello ChatProvider Provider');
  }

//fungsi untuk mengatur dokumen yang sedang digunakan
  setCurrentDocument(data){
  	this.currentDocument=data;
  }

//fungsi untuk mengambil data semua dokumen
  getDocument(){
  	let observable = new Observable( observer =>{
  		this.socket.emit('getListDocument',{data:''},(result)=>{
  			observer.next(result)
  		})
  	})
  	return observable;
  }

//fungsi untuk mengambil data di my dokumen
  getMyDocument(data){
  	console.log(data)
  	let observable = new Observable( observer =>{
  		this.socket.emit('getListMyDocument',{owner:data},result=>{
  			observer.next(result)
  		})
  	})          
  	return observable
  }

//fungsi untuk verifikasi dokumen
  verificationDocument(data){
  	let observable = new Observable( observer =>{
  		this.socket.emit('verification',{title:data.title,password:data.password,loginUser:this.UserProvider.userLogin},(result)=>{
  			observer.next(result)
  		})
  	});
  	return observable
  }

//fungsi buat dokumen
  createDocument(data){
  	let observable = new Observable( observer =>{
  		this.socket.emit('createDocument',data,result=>{
  			observer.next(result)
  		})
  	})
  	return observable
  }

//fungsi update dokumen
  updateListDcument(){
  	let observable = new Observable (observer=>{
  		this.socket.on("updateListDocument",result=>{
  			observer.next(result)
  		})
  	})
  return observable
  }

//fungsi delete dokumen
  deleteDocument(data){
  	let observable = new Observable (observer =>{
  		this.socket.emit('deleteDocument',data,result=>{
  			observer.next(result)
  		})
  	})
  	return observable
  }


}
