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
import { PageOnePageModule } from './page-one/page-one.module';
import { PageTwoPageModule } from './page-two/page-two.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'page-one',
            loadChildren: () => import('./page-one/page-one.module').then( m => m.PageOnePageModule)
          },
          {
            path: 'page-two',
            loadChildren: () => import('./page-two/page-two.module').then( m => m.PageTwoPageModule)
          },
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
