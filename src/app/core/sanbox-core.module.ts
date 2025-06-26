import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CORE_MODULES } from './module-helper/module-helper';


@NgModule({
  declarations: [],
  imports: [
    ...CORE_MODULES
  ],
  exports: [
    ...CORE_MODULES
  ]
})
export class SandboxCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: SandboxCoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the App only.');
    }
  }
}
