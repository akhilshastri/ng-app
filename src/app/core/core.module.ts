import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastsComponent } from './toasts/toasts.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent, ToastsComponent, DialogComponent]
})
export class CoreModule {

/*

 https://angular.io/docs/ts/latest/guide/ngmodule.html#!#configure-core-services-with-_coremodule-forroot_

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserServiceConfig, useValue: config }
      ]
    };
  }*/


  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
