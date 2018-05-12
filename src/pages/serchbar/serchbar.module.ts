import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerchbarPage } from './serchbar';

@NgModule({
  declarations: [
    SerchbarPage,
  ],
  imports: [
    IonicPageModule.forChild(SerchbarPage),
  ],
})
export class SerchbarPageModule {}
