import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayout } from './Layout/main.layout';

import { HomePage } from './Pages/home.page';

import { InputComponent } from "./Components/Input/input.component";
import { ButtonComponent } from "./Components/Button/button.component";
import { TypographyComponent } from "./Components/Typography/typography.component";
import { BubbleComponent } from "./Components/Bubble/bubble.component";
import { CardComponent } from "./Components/Card/card.component";
import { CheckboxComponent } from "./Components/Checkbox/checkbox.component";

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MainLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputComponent,
    ButtonComponent,
    TypographyComponent,
    BubbleComponent,
    CardComponent,
    CheckboxComponent,
    MatIconModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
