import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CityComponent } from './city.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CityComponent]
})
export class CityModule { }
