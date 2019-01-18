import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [BadgeComponent, ButtonComponent, CardsComponent, GridListComponent, ListComponent, MenuComponent, TabsComponent],
  imports: [
    CommonModule
  ],
  exports:[BadgeComponent, ButtonComponent, CardsComponent, GridListComponent, ListComponent, MenuComponent, TabsComponent]
})
export class MaterialUiModule { }
