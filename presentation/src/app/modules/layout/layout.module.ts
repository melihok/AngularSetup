import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { LayoutComponent } from './components';
import { HeaderComponent } from './components/header/header.component';
import { LayoutRouting } from './layout.routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    LayoutRouting,
    SharedModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutModule { }
