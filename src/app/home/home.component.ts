import { Component, OnInit, Attribute } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

// import { TweenLite, TimelineLite, Power3 } from 'gsap';
import { TweenMax, TimelineMax, Power3 } from 'gsap';


declare const getDims: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

    // plugins = [
    //     CSSPlugin,
    //     AttrPlugin
    // ];

    logoTL = new TimelineMax({ delay: 1.5 });

    deltaX: number;
    deltaY: number;
    // deltaX = window.innerWidth * 0.14375;
    // deltaY = window.innerHeight * 0.14375;

    globalStyles: string;
    homeStyles: string;


    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {

        // this.deltaX = getDims('imgContainerId')[0];
        this.deltaX = getDims('imgContainerId')[0] * 0.875;
        this.deltaY = window.innerHeight * 0.05;

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
                this.homeStyles = 'homeSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.homeStyles = 'homeSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.homeStyles = 'homeSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.homeStyles = 'homeMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.homeStyles = 'homeLg';

                // this.deltaX = getDims('imgContainerId')[0] / 1.6875;
                this.deltaX = getDims('imgContainerId')[0] * 0.6;
            }
        });

        this.logoAnim();
    }


    // ==================== FUNCTION: logoAnim() ====================

    logoAnim() {
        this.logoTL
            .to(['#imgLID'], 1, { x: -this.deltaX, y: this.deltaY, transformOrigin: '100% 100%', ease: Power3.easeOut }, 'frame01 += 0')
            .to(['#imgRID'], 1, { x: this.deltaX, transformOrigin: '50% 50%', ease: Power3.easeOut }, 'frame01 += 0')
        ;
    }


    // ==================== FUNCTION: eggOver(evt, propsArray) RE: egg - SOOOOOOPER MESSY! Please clean this up for more universal use as a rollover. ====================

    eggOver(evt, propsArray: Array<string | number>) {
    // eggOver(evt: MouseEvent, propsArray: Array<string | number>) {

        console.log('');
        console.log('PING! eggOver triggered!   this = ' + this + '   propsArray = ' + propsArray);
        console.log('evt.target.id = ' + evt.target.id);
        console.log('evt.target.firstChild.id = ' + evt.target.firstChild.id);
        console.log('evt.target.lastChild.id = ' + evt.target.lastChild.id);

        // for (const thisProp of propsArray) {
        //     console.log(thisProp);
        // }

        TweenMax.to(['#' + evt.target.firstChild.id], 0.25, { autoAlpha: propsArray[1], ease: Power3.easeOut });
        TweenMax.to(['#' + evt.target.lastChild.id], 0.25, { autoAlpha: propsArray[2], ease: Power3.easeOut });
    }
}
