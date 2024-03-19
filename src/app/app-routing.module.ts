import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecentlyAddedComponent } from '../recently-added/recently-added.component';
import { GoComponent } from '../go/go.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  { path: 'recently-added', component: RecentlyAddedComponent },
  { path: 'go', component: GoComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }