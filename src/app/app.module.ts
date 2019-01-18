import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SmallChartComponent } from './small-chart/small-chart.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatBadgeModule,
  MatSlideToggleModule,
  MatRippleModule,
  MatTabsModule,
  MatExpansionModule
} from '@angular/material';

import { MaterialUiModule } from './material-ui/material-ui.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AddressComponent,
    TableComponent,
    DashboardComponent,
    ChartComponent,
    ToolbarComponent,
    RightSidenavComponent,
    PieChartComponent,
    BarChartComponent,
    SmallChartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatCardModule,
    ChartsModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatRippleModule,
    NgMatSearchBarModule,
    MatTabsModule,
    MatExpansionModule,
    MaterialUiModule
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
