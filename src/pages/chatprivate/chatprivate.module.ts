import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatprivatePage } from './chatprivate';

@NgModule({
  declarations: [
    ChatprivatePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatprivatePage),
  ],
})
export class ChatprivatePageModule {}
