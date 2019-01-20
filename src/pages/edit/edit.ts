import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import JQuery from 'jquery'
import { ChatdocumentPage } from '../../pages/chatdocument/chatdocument'
import { Socket } from 'ng-socket-io';
import { PlatformLocation } from '@angular/common' 

import { DocumentProvider } from '../../providers/document/document'
import { UserProvider } from '../../providers/user/user'
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
@ViewChild('froalaEditor') edt: ElementRef;
title
loginUser
text
cursor
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private socket : Socket,
      private user : UserProvider,
      private document : DocumentProvider,
      private location :PlatformLocation ) {

    this.title = this.document.currentDocument
    //this.loginUser = this.user.userLogin

    this.socket.on('getTextDocument',(result)=>{
        this.text=(result['0'].text)
    });

    this.socket.on('updateTextDocument',(data)=>{
       this.text=(data['data'])
       $(this.edt.nativeElement).on('froalaEditor.contentChanged', (e, editor) => {
          console.log('content changed');
       });
                
    })



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  chat(){
  	this.navCtrl.push(ChatdocumentPage)
  }

  public options: Object = {
    toolbarButtons:   [ 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                           'embedly', 'insertTable', '|',
                            'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                             'print', 'html', '|', 'undo', 'redo'],
    toolbarButtonsXS: [ 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                           'embedly', 'insertTable', '|',
                            'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                             'print', 'html', '|', 'undo', 'redo'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                           'embedly', 'insertTable', '|',
                            'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                             'print', 'html', '|', 'undo', 'redo'],
    toolbarButtonsMD: [ 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote',
                           '-',
                       'embedly', 'insertTable', '|','emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|','print', 'html', '|', 'undo', 'redo'],
    events : {
        'froalaEditor.click':(e, editor)=>{
          let data = (editor.html.get());
          this.cursor = editor.selection.get()
          console.log(this.cursor)
          this.socket.emit('sendTextDocument',{data:data,title:this.title})

        },
        'froalaEditor.keyup':(e, editor)=>{
          let data = (editor.html.get());
          this.cursor = editor.selection.get()
          console.log(this.cursor)
          this.socket.emit('sendTextDocument',{data:data,title:this.title})
        }
      }
    };

}
