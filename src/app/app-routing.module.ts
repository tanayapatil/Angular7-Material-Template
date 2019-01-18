import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { HomeComponent } from './home/home.component';
import { BadgeComponent } from './material-ui/badge/badge.component';
import { ButtonComponent } from './material-ui/button/button.component';
import { CardsComponent } from './material-ui/cards/cards.component';
import { GridListComponent } from './material-ui/grid-list/grid-list.component';
import { ListComponent } from './material-ui/list/list.component';
import { MenuComponent } from './material-ui/menu/menu.component';
import { TabsComponent } from './material-ui/tabs/tabs.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'badge',
    component: BadgeComponent,

  },
  {
    path: 'button',
    component: ButtonComponent,

  },
  {
    path: 'cards',
    component: CardsComponent,

  },
  {
    path: 'gridlist',
    component: GridListComponent,

  },
  {
    path: 'list',
    component: ListComponent,

  },
  {
    path: 'menu',
    component: MenuComponent,

  },
  {
    path: 'tabs',
    component: TabsComponent,

  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialUiModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
