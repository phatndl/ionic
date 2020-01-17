import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PageOnePage } from './page-one/page-one.page';
import { PageTwoPage } from './page-two/page-two.page';
import { HeaderComponent } from './page-one/header/header.component';
import { MenuComponent } from './page-one/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, PageOnePage, PageTwoPage]
})
export class HomePageModule {}
