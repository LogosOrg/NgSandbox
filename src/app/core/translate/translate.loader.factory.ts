// src/app/core/translate.loader.ts
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function TranslateLoaderFactory(http: HttpClient): TranslateLoader {
  /*
  "assets": [
  "src/favicon.ico",
  "src/assets",
  을 angular.json에 등록해야함.  
  */
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}
