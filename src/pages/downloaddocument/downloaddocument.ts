import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Socket } from 'ng-socket-io'
import JQuery from 'jquery'
import { File } from '@ionic-native/file'
import { FileOpener } from '@ionic-native/file-opener'

/**
 * Generated class for the DownloaddocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downloaddocument',
  templateUrl: 'downloaddocument.html',
})
export class DownloaddocumentPage {
  @ViewChild('one') d1:ElementRef;

  pdf
  
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private socket : Socket,
      public file : File,
      public fileOpener : FileOpener,
      public platform : Platform,
      public alertCtrl : AlertController ) {

    this.socket.on('getTextDocument',(result)=>{
       $('#Html2Pdf').append(result['0'].text)
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloaddocumentPage');
  }

   generatePdf(){
    const div = document.getElementById("Html2Pdf");
    const options = {background:"white",height :div.clientHeight , width : div.clientWidth  };
    html2canvas(div,options).then((canvas)=>{
      

      //Initialize JSPDF
      var doc = new jsPDF("p","mm","a4");
      //Converting canvas to Image
      let imgData = canvas.toDataURL("image/PNG");
      //Add image Canvas to PDF
      doc.addImage(imgData, 'PNG', 20,20 );
      
      let pdfOutput = doc.output();

      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
      }


      //This is where the PDF file will stored , you can change it as you like
      // for more information please visit https://ionicframework.com/docs/native/file/
      if(this.platform.is('core')||this.platform.is('mobileweb') ){
         
         doc.save('example.pdf')


      }else{
        const directory = this.file.externalApplicationStorageDirectory ;

        //Name of pdf
        const fileName = "example.pdf";

        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer)
        .then((success)=>{
   
         let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'PDF downloaded!',
            buttons: ['Ok']
          });
          alert.present()

        })
        .catch((error)=>{
            JSON.stringify(error)
            let alert = this.alertCtrl.create({
              title: 'Filed',
              subTitle: 'File name already exist!' ,
              buttons: ['Ok']
            });
            alert.present()
        });
      }
    });
  }


}
