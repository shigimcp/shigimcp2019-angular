// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

// import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material';

import { Work } from '../../assets/data/work';


@Component({
    selector: 'app-work-nav',
    templateUrl: './work-nav.component.html',
    styleUrls: ['./work-nav.component.scss']
})


// export class WorkNavComponent {
export class WorkNavComponent implements OnInit {

    @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

    // mode = new FormControl('over');

    work = Work;
    sideNavStyles: string;
    thisRoute: string;

    // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    //     .pipe(
    //         map(result => result.matches),
    //         shareReplay()
    //     );

    constructor(
        private breakpointObserver: BreakpointObserver,
        // private router: Router
        public router: Router
    ) {}


    ngOnInit() {
        // console.log('');
        // console.log('======================================================');
        console.log('========== work-nav.component.ts - ngOnInit() ==========');
        // console.log('======================================================');

        this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).subscribe( (state: BreakpointState) => {

            if (state.breakpoints[Breakpoints.XSmall]) {
                console.log( 'Matches XSmall viewport - Breakpoints.XSmall: max-width equals 599.99px');
                this.sideNavStyles = 'sideNavSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.sideNavStyles = 'sideNavSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.sideNavStyles = 'sideNavSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.sideNavStyles = 'sideNavMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.sideNavStyles = 'sideNavLg';
            }
        });
    }


    goToEmployer(thisEmployer: any) {
    // goToEmployer(thisEmployer: string) {
        console.log('');
        console.log('========== work-nav.component.ts - goToEmployer(thisEmployer: string) ==========');

        // console.log('thisEmployer = ' + thisEmployer);
        console.log('thisEmployer.albumID = ' + thisEmployer.albumID);

        // this.getElementsByClassName('.bg_txt').nativeElement.innerHtml = thisEmployer;
        // this.bgText = thisEmployer;

        // console.log('this.router.url.split(#)[0] = ' + this.router.url.split('#')[0]);
        // this.thisRoute = this.router.url.split('#')[0];

        this.sidenav.toggle();
    }

    toggle() {
        this.sidenav.toggle();

        console.log('this.router.url.split(#)[0] = ' + this.router.url.split('#')[0]);
        this.thisRoute = this.router.url.split('#')[0];
    }

}
