import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { CommonStylesModule } from '../common-styles/common-styles.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    
  ],
  exports: [
    MatIconModule,
    MatSnackBarModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
