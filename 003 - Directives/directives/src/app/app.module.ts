import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UnlessDirective } from './app-unless/unless.directive';

import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
