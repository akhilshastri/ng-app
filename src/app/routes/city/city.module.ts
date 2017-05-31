import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CityComponent} from './city.component';
import {CityRoutingModule} from './city.routing';

@NgModule({
  imports: [
    SharedModule,
    CityRoutingModule
  ],
  declarations: [CityComponent]
})
export class CityModule {
}
