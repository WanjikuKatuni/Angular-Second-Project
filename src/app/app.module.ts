import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchformComponent } from './components/gitsearchform/gitsearchform.component';
import { GitresultComponent } from './components/gitresult/gitresult.component';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchformComponent,
    GitresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
