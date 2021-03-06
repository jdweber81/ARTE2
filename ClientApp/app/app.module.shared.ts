import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { AskArteComponent } from './components/askArte/askArte.component';

import {
    ButtonModule,
    GrowlModule,
    FileUploadModule,
    DataTableModule,
    SharedModule
} from 'primeng/primeng';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent, 
        AskArteComponent,
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        ButtonModule,
        GrowlModule,
        FileUploadModule,
        DataTableModule,
        SharedModule
    ]
};
