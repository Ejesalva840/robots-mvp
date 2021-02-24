import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { ProductionPageComponent } from './production-page/production-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'upload', component: UploadPageComponent },
  { path: 'production', component: ProductionPageComponent },
  { path: 'reports', component: ReportsPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'dashboard', component: UploadPageComponent },
  { path: '', redirectTo: '/production', pathMatch: 'full' },
  { path: '**', component: ProductionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
