import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonStylesModule { }
