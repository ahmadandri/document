import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateDocumentPage } from './create-document';

@NgModule({
  declarations: [
    CreateDocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDocumentPage),
  ],
})
export class CreateDocumentPageModule {}
