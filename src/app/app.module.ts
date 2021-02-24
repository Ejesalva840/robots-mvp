import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ProjectPanelComponent } from './components/production-page/project-panel/project-panel.component';
import { PreviewPanelComponent } from './components/production-page/preview-panel/preview-panel.component';
import { ProductionPanelComponent } from './components/production-page/production-panel/production-panel.component';
import { ProductionPageComponent } from './components/production-page/production-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { ReportsPageComponent } from './components/reports-page/reports-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';

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
