import { provideRouter, withComponentInputBinding } from '@angular/router';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoaderFactory } from './core/translate/translate.loader.factory';

export const appConfig = {
  providers: [
    provideCore(),         
    provideI18n(),         
    provideHttp(),         
    provideAnimations(),   
    provideRouting(),
  ]
};


export function provideCore() {
  return [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule, ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations()
  ];
}

export function provideI18n() {
  return [
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useFactory: TranslateLoaderFactory, deps: [HttpClient] }
      })
    )
  ];
}

export function provideHttp() {
  return [provideHttpClient()];
}

export function provideRouting() {
  return [provideRouter(routes, withComponentInputBinding())];
}