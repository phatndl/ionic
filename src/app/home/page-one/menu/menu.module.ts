import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent, MenuItemComponent]
})
export class MenuModule { }
