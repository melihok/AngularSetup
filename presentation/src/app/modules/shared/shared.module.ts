import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd party libs
import { MaterialModule  } from './material';

const thirdPartyLibs = [
  MaterialModule,
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ...thirdPartyLibs 
  ],
  exports: [FormsModule, ReactiveFormsModule, ...thirdPartyLibs],
  providers: [ ]
})
export class SharedModule { }
