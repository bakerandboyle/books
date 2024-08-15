import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [BrowserModule],
  exports: [
    BookComponent
  ]
})
export class AppModule { }
