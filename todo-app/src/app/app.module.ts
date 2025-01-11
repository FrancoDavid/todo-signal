import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainLayout } from './Layout/main.layout';
import { AppComponent } from './app.component';
import { HomePage } from './Pages/home.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MainLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
