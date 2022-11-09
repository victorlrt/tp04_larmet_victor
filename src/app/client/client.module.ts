import { CommonModule } from '@angular/common';
import { ComponentFormComponent } from './component-form/component-form.component';
import { ComponentSummaryComponent } from './component-summary/component-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CheckFormStringDirective } from '../directive/directive-string/check-form-string.directive';
import { CheckFormNumberDirective } from '../directive/directive-number/check-form-number.directive';
import { PipeFormatTelPipe } from '../pipe/pipe-format-tel.pipe';
import { CheckFormEMailDirective } from '../directive/directive-email/check-form-email.directive';
import { RouterModule, Routes } from '@angular/router';

const clientRoutes: Routes = [
  {path: '', component: ComponentFormComponent}

];

@NgModule({
  declarations: [
    ComponentFormComponent,
    ComponentSummaryComponent,
    CheckFormStringDirective,
    CheckFormNumberDirective,
    PipeFormatTelPipe,
    CheckFormEMailDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(clientRoutes),

  ]
})
export class ClientModule { }
