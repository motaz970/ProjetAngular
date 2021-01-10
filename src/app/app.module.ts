import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { FormsModule } from '@angular/forms';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AddAnimalComponent,
    UpdateAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
