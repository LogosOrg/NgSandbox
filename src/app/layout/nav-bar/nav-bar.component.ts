import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { CORE_MODULES } from '../../core/module-helper/module-helper';
import { SandboxCoreModule } from '../../core/sanbox-core.module';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    SandboxCoreModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menu: any[] = [];
  currentLang: string = 'en';

  constructor(private http: HttpClient, private translate: TranslateService) {
    this.translate.use(this.currentLang);
  }

  ngOnInit() {
    this.http.get<any[]>('/assets/menu.json').subscribe(data => {
      this.menu = data;
    });
  }

  languageSwitch(){
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
    this.translate.use(this.currentLang);
  }
}
