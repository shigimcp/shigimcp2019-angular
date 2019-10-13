import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';


declare const showDefsJS: any;
declare const hideDefsJS: any;


@Component({
    selector: 'app-shigeru',
    templateUrl: './shigeru.component.html',
    styleUrls: ['./shigeru.component.scss']
})


export class ShigeruComponent implements OnInit {

    globalStyles: string;
    shigiStyles: string;


    constructor(public breakpointObserver: BreakpointObserver) { }


    ngOnInit() {
        // console.log('');
        // console.log('==========================================================');
        // console.log('========== shigi.component.ts - ngOnInit() ==========');
        // console.log('==========================================================');

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
                this.shigiStyles = 'shigiSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.shigiStyles = 'shigiSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.shigiStyles = 'shigiSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.shigiStyles = 'shigiMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.shigiStyles = 'shigiLg';
            }
        });
    }


    // ========================= NAME / PRONUNCIATION =========================

    showDefs(evt: any, thisElem: any) {
        // console.log('');
        // console.log('===========================================================');
        // console.log('========== shigi.component.ts - showDefs(thisID) ==========');
        // console.log('===========================================================');

        // console.log('evt = ' + evt + '     evt.target = ' + evt.target + '     evt.target.id = ' + evt.target.id);
        // console.log('thisElem = ' + thisElem);
        // // console.log('thisElem = ' + thisElem + '     thisElem.id = ' + thisElem.id);

        // showDefsJS(evt.target.id);
        showDefsJS(thisElem);
    }

    hideDefs(evt: any, thisElem: any) {
        // console.log('');
        // console.log('===========================================================');
        // console.log('========== shigi.component.ts - hideDefs(thisID) ==========');
        // console.log('===========================================================');

        // console.log('evt = ' + evt + '     evt.target.id = ' + evt.target.id);
        // console.log('thisElem = ' + thisElem);
        // // console.log('thisElem = ' + thisElem + '     thisElem.id = ' + thisElem.id);

        // hideDefsJS(evt.target.id);
        hideDefsJS(thisElem);
    }
}
