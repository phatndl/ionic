import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOnePageRoutingModule } from './page-one-routing.module';

import { PageOnePage } from './page-one.page';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOnePageRoutingModule
  ],
  declarations: [PageOnePage, HeaderComponent, MenuComponent]
})
export class PageOnePageModule {}
