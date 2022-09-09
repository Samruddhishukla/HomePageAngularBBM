import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

const routes: Routes = [
  {path: '', component:WallpaperComponent},
  {path: 'hospitals', component:HospitalDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
