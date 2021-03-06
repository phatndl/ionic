import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOnePageRoutingModule } from './page-one-routing.module';

import { PageOnePage } from './page-one.page';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from './menu/menu.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOnePageRoutingModule,
    MenuModule
  ],
  declarations: [PageOnePage, HeaderComponent],
  exports: [PageOnePage]
})
export class PageOnePageModule {}
