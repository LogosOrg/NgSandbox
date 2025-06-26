import { Component } from '@angular/core';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { CORE_MODULES } from '../core/module-helper/module-helper';
import { SandboxCoreModule } from '../core/sanbox-core.module';

@Component({
  selector: 'app-main-layout',
  imports: [
    NavbarComponent,
    SandboxCoreModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
