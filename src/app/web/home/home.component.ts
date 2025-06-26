import { Component } from '@angular/core';
import { SandboxCoreModule } from '../../core/sanbox-core.module';

@Component({
  selector: 'app-home',
  imports: [
    SandboxCoreModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
