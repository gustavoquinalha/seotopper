import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GithubButtonModule } from 'ng-github-button';
import { CodeResultComponent } from "./components/code-result/code-result.component";
import { PreviewComponent } from './components/preview/preview.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeResultComponent,
    PreviewComponent,
    MenuComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightModule,
    ReactiveFormsModule,
    GithubButtonModule,
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
