import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {
  NestedFormComponent
} from './nested-forms/nested-form.component';
import {ItemsFormArrayComponent} from './items-array/items-array.component';
import {ItemFormControlComponent} from './item-control/item-control.component';


@NgModule({
  declarations: [
    AppComponent,
    NestedFormComponent, ItemsFormArrayComponent, ItemFormControlComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
