import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ProjectPanelComponent } from './production-page/project-panel/project-panel.component';
import { PreviewPanelComponent } from './production-page/preview-panel/preview-panel.component';
import { ProductionPanelComponent } from './production-page/production-panel/production-panel.component';
import { ProductionPageComponent } from './production-page/production-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectPanelComponent,
    PreviewPanelComponent,
    ProductionPanelComponent,
    ProductionPageComponent,
    HomePageComponent,
    UploadPageComponent,
    ReportsPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
