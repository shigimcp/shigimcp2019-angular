import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Employers } from '../../assets/data/employers';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit {
// export class ResumeComponent {

    employers = Employers;

    globalStyles: string;
    resStyles: string;


    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {

        this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).subscribe( (state: BreakpointState) => {

            if (state.breakpoints[Breakpoints.XSmall]) {
                // console.log( 'Matches XSmall viewport - Breakpoints.XSmall: max-width equals 599.99px');
                this.globalStyles = 'globalSm';
                this.resStyles = 'resSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.resStyles = 'resSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.resStyles = 'resSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.resStyles = 'resMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.resStyles = 'resLg';
            }
        });
    }

    // viewWork(thisEmployer: any) {
    //     // window.alert('thisEmployer = ' + thisEmployer);
    //     console.log('thisEmployer = ' + thisEmployer);
    //     console.log('thisEmployer.albumID = ' + thisEmployer.albumID);

    //     this.thisEmployerID = thisEmployer;
    //     // this.albumID = thisEmployer;
    //     // console.log('this.albumID = ' + this.albumID);
    // }
}
