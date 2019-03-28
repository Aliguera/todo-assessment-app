import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTodoPage } from './create-todo';

@NgModule({
  declarations: [
    CreateTodoPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTodoPage),
  ],
  exports: []
})
export class CreateTodoPageModule {}
