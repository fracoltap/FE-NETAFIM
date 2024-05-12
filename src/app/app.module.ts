import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductionComponent } from './modules/Production/production.component';
import { SharedModule } from './Shared/shared.module';
import { UrlService } from './services/router/url.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { UsersFormComponent } from './modules/users/users-form/users-form.component';
import { UsersListComponent } from './modules/users/users-list/users-list.component';
import { UsersViewComponent } from './modules/users/users-view/users-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
    ProductionComponent,
    UsersFormComponent,
    UsersListComponent,
    UsersViewComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,       
    HttpClientModule,       
    LayoutModule,
  ],
  providers: [
    UrlService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

