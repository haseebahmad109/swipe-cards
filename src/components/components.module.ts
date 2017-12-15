import { NgModule } from '@angular/core';
import { PersonCardComponent } from './person-card/person-card';

import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [
    PersonCardComponent
  ],
	imports: [
    IonicModule
  ],
	exports: [
    PersonCardComponent,
  ]
})
export class ComponentsModule {}
