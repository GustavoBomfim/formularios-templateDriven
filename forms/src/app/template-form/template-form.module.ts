import { AppModule } from './../app.module';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TemplateFormComponent,
    //FormDebugComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    //AppModule
    SharedModule
  ],
})
export class TemplateFormModule { }
