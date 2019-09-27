import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    hedStyles: string;

    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        // console.log('');
        // console.log('======================================================');
        console.log('========== header.component.ts - ngOnInit() ==========');
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
                this.hedStyles = 'headerSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.hedStyles = 'headerSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.hedStyles = 'headerSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.hedStyles = 'headerMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.hedStyles = 'headerLg';
            }
        });
    }
}
