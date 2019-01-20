import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file'
import { FileOpener } from '@ionic-native/file-opener'


import { EditPage } from '../pages/edit/edit'
import { Tab1Page } from '../pages/tab1/tab1'
import { RegistrationPage } from '../pages/registration/registration'
import { LoginPage } from '../pages/login/login'
import { ChatprivatePage } from '../pages/chatprivate/chatprivate'
import { CreateDocumentPage } from '../pages/create-document/create-document'
import { MyDocumentPage } from '../pages/my-document/my-document'
import { DownloaddocumentPage } from '../pages/downloaddocument/downloaddocument'
import { ChatdocumentPage } from '../pages/chatdocument/chatdocument'

import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { ChatProvider } from '../providers/chat/chat';
import { DocumentProvider } from '../providers/document/document';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://serverdocument.herokuapp.com', options: {} };


import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    MyApp,
    RegistrationPage,
    LoginPage,
    Tab1Page,
    ChatprivatePage,
    CreateDocumentPage,
    MyDocumentPage,
    DownloaddocumentPage,
    EditPage,
    ChatdocumentPage
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistrationPage,
    LoginPage,
    Tab1Page,
    ChatprivatePage,
    CreateDocumentPage,
    MyDocumentPage,
    DownloaddocumentPage,
    EditPage,
    ChatdocumentPage
  ],
  providers: [
    File,
    FileOpener,
    StatusBar,
    SplashScreen,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    DocumentProvider
    
  ]
})
export class AppModule {}
