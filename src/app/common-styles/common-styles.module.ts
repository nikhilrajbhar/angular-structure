import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    SpinnerComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CommonStylesModule { }
