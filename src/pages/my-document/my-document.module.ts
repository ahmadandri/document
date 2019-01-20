import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDocumentPage } from './my-document';

@NgModule({
  declarations: [
    MyDocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDocumentPage),
  ],
})
export class MyDocumentPageModule {}
