import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
