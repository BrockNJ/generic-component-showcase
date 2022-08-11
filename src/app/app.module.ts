import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import {GenericTableModule} from "@hoi/components-ui";
import { TableIndicatorCellComponent } from './components/table-indicator-cell/table-indicator-cell.component';
import { ToggleCellComponent } from './components/toggle-cell/toggle-cell.component';
import {FormCheckboxInputModule} from "@hoi/components-form-inputs";

@NgModule({
  declarations: [
    AppComponent,
    TableWrapperComponent,
    TableCellComponent,
    TableIndicatorCellComponent,
    ToggleCellComponent
  ],
  imports: [
    BrowserModule,
    GenericTableModule,
    FormCheckboxInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
