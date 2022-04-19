import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchformComponent } from './searchform/searchform.component';
import { GitsearchformComponent } from './components/gitsearchform/gitsearchform.component';
import { GitresultformComponent } from './components/gitresultform/gitresultform.component';
import { GitresultComponent } from './components/gitresult/gitresult.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent,
    GitsearchformComponent,
    GitresultformComponent,
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
