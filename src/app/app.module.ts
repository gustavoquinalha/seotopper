import { NgModule } from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubButtonModule } from 'ng-github-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightModule,
    ReactiveFormsModule,
    GithubButtonModule
  ],
  providers: [
    provideHttpClient(),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
