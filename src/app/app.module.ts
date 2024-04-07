import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterBarComponent } from './components/commons/filter-bar/filter-bar.component';
import { BienCardComponent } from './components/commons/bien-card/bien-card.component';
import { BienListComponent } from './components/functionals/bien-list/bien-list.component';
import { AsideFilterComponent } from './components/functionals/aside-filter/aside-filter.component';
import { CategoryFilterComponent } from './components/commons/category-filter/category-filter.component';
import { TypeFilterComponent } from './components/commons/type-filter/type-filter.component';
import { BienDetailsComponent } from './components/views/bien-details/bien-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterBarComponent,
    BienCardComponent,
    BienListComponent,
    AsideFilterComponent,
    CategoryFilterComponent,
    TypeFilterComponent,
    BienDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
