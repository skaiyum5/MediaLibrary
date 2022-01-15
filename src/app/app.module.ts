import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowPhotoComponent } from './show-photo/show-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    ShowPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
