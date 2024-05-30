import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteFormComponent } from './site-form/site-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SiteService } from './service/site.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteListComponent,
    SiteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
