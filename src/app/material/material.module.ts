import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Material Modules */
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';



const matModule = [
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matModule
  ],
  exports: [
    matModule
  ]
})
export class MaterialModule { }
