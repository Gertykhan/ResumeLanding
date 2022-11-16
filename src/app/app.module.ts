import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  }
];

@NgModule({

  declarations: [
    AppComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
