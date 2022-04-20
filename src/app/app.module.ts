import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchformComponent } from './components/gitsearchform/gitsearchform.component';
import { GitresultComponent } from './components/gitresult/gitresult.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DateCountPipe } from './pipe/date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchformComponent,
    GitresultComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
