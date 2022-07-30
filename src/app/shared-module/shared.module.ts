import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { SurnameShortcutPipe } from './pipes/surname-shortcut.pipe';
import { ImportantDirective } from './directives/important.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SurnameShortcutPipe,
    ImportantDirective
  ]
})
export class SharedModule { }
