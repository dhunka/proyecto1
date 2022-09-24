import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentelistPageRoutingModule } from './docentelist-routing.module';

import { DocentelistPage } from './docentelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentelistPageRoutingModule
  ],
  declarations: [DocentelistPage]
})
export class DocentelistPageModule {}
