import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DrugIngredientsComponent } from './custom/drug-ingredients/drug-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    DrugIngredientsComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
