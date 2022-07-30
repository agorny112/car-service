import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';
import { ImportantDirective } from './directives/important.directive';
import { MyCurrencyPipe } from './pipes/myCurrency.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective,
    MyCurrencyPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective,
    MyCurrencyPipe
  ]
})
export class SharedModule { }
