import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecentlyAddedComponent } from '../recently-added/recently-added.component';
import { GoComponent } from '../go/go.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
    { path: 'recently-added', component: RecentlyAddedComponent },
    { path: 'go', component: GoComponent },
    { path: 'settings', component: SettingsComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        RecentlyAddedComponent,
        GoComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }