import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { LayoutModule } from '@angular/cdk/layout';


import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerComponent } from './employer/employer.component';
import { HomeComponent } from './home/home.component';
import { MesmerizeComponent } from './mesmerize/mesmerize.component';
import { AboutComponent } from './about/about.component';
import { ThoughtComponent } from './thought/thought.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from './modal/modal.module';
import { ModalService } from './modal/modal.service';
import { ShigeruComponent } from './shigeru/shigeru.component';
// import { ChangeContentDirective } from './change-content.directive';


const workRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'work', component: WorkComponent },
    { path: 'about', component: AboutComponent },

    { path: 'employer', component: EmployerComponent },
    // { path: 'employer/:employerId', component: EmployerComponent },
    // { path: 'employer/:employer', component: EmployerComponent },    // can't pass objects, only strings
    { path: 'employer-list', component: EmployerListComponent },
    { path: 'mesmerize', component: MesmerizeComponent },
];

const routerOptions: ExtraOptions = {
    // useHash: true,
    // enableTracing: true,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 60],
};


@NgModule({

    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot(
            workRoutes,
            routerOptions
        ),
        MDBBootstrapModule.forRoot(),
        // LayoutModule,
        ModalModule,
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        ResumeComponent,
        WorkComponent,
        EmployerListComponent,
        EmployerComponent,
        HomeComponent,
        MesmerizeComponent,
        AboutComponent,
        ThoughtComponent,
        ModalComponent,
        ShigeruComponent,
        // ChangeContentDirective
    ],

    providers: [
        ModalService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
