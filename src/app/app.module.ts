import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { LayoutModule } from '@angular/cdk/layout';

// import { ReactiveFormsModule } from '@angular/forms';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkNavComponent } from './work-nav/work-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { ChangeContentDirective } from './change-content.directive';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// import {MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatSidenavModule, MatButtonToggleModule, MatExpansionModule, MatRippleModule} from '@angular/material';


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
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        // ReactiveFormsModule,
        // MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatSidenavModule, MatButtonToggleModule, MatExpansionModule, MatRippleModule,
    ],

    // exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatSidenavModule, MatButtonToggleModule, MatExpansionModule, MatRippleModule],

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
        WorkNavComponent,
        // ChangeContentDirective
    ],

    providers: [
        ModalService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
