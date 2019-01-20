import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatdocumentPage } from './chatdocument';

@NgModule({
  declarations: [
    ChatdocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatdocumentPage),
  ],
})
export class ChatdocumentPageModule {}
