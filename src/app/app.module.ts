import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [BrowserModule],
  exports: [
    BookComponent
  ]
})
export class AppModule { }
