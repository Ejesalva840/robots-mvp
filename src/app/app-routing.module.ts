import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { ReportsPageComponent } from './components/reports-page/reports-page.component';
import { ProductionPageComponent } from './components/production-page/production-page.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
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
