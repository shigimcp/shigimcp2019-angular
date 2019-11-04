import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

// import { TweenLite, TimelineLite, Power3 } from 'gsap';
import { TweenMax, TimelineMax, Power3 } from 'gsap';


declare const showMe: any;
declare const getDims: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

    logoTL = new TimelineMax({ delay: 1.5 });

    deltaX: number;
    deltaY: number;

    globalStyles: string;
    homeStyles: string;


    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        // console.log('');
        // console.log('====================================================');
        // console.log('========== home.component.ts - ngOnInit() ==========');
        // console.log('====================================================');

        // console.log('getDims(imgContainerId) = ' + getDims('imgContainerId'));

        // this.deltaX = getDims('imgContainerId')[0] * 0.875;
        // this.deltaX = getDims('imgContainerId')[0] * 0.6;
        // this.deltaX = (window.innerWidth * 0.9) * 0.875;
        // this.deltaX = (window.innerWidth * 0.9) * 0.25;
        this.deltaY = window.innerHeight * 0.05;

        // console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
        // console.log('this.deltaX = ' + this.deltaX + '     this.deltaY = ' + this.deltaY);


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

                // this.deltaX = getDims('imgContainerId')[0] * 0.6;
                this.deltaX = (window.innerWidth * 0.9) * 0.2375;
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.homeStyles = 'homeSm';

                // this.deltaX = getDims('imgContainerId')[0] * 0.6;
                this.deltaX = (window.innerWidth * 0.9) * 0.2375;
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.homeStyles = 'homeSm';

                // this.deltaX = getDims('imgContainerId')[0] * 0.6;
                // this.deltaX = (window.innerWidth - (window.innerWidth * 0.9)) * 0.5;
                this.deltaX = (window.innerWidth * 0.9) * 0.2375;
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.homeStyles = 'homeMd';

                // this.deltaX = getDims('imgContainerId')[0] * 0.6;
                // this.deltaX = (window.innerWidth - (window.innerWidth * 0.9)) * 0.5;
                this.deltaX = (window.innerWidth * 0.9) * 0.2375;
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.homeStyles = 'homeLg';

                // this.deltaX = getDims('imgContainerId')[0] / 1.6875;
                // this.deltaX = getDims('imgContainerId')[0] * 0.6;
                this.deltaX = (window.innerWidth * 0.9) * 0.1875;
            }
        });

        // showMe('hidden');
        showMe('shigeru', 'hidden');

        this.logoAnim();
    }


    // ==================== FUNCTION: logoAnim() ====================

    logoAnim() {
        // console.log('');
        // console.log('========== home.component.ts - logoAnim() ==========');

        // this.deltaX = getDims('imgContainerId')[0] * 0.6;
        // console.log('this.deltaX = ' + this.deltaX + '     this.deltaY = ' + this.deltaY);

        this.logoTL
            .to(['#imgDivLID'], 1, { x: -this.deltaX, y: this.deltaY, transformOrigin: '100% 100%', ease: Power3.easeOut }, 'frame01 += 0')
            .to(['#imgDivRID'], 1, { x: this.deltaX, transformOrigin: '50% 50%', ease: Power3.easeOut, onComplete: this.enableDivs }, 'frame01 += 0')
            .fromTo(['#tagL, #tagR'], 1.5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power3.easeOut}, 'frame01 +=0')
        ;
    }

    enableDivs() {
        // console.log('');
        // console.log('========== home.component.ts - enableDivs() ==========');

        document.getElementById('imgDivRID').style.pointerEvents = 'auto';
        document.getElementById('imgDivLID').style.pointerEvents = 'auto';
    }

    shigimcpDOTcom() {
        // console.log('');
        // console.log('========== home.component.ts - shigimcpDOTcom() ==========');

        window.open(
            'https://www.shigimcp.com', '_blank'
        );
    }


    // ==================== FUNCTION: eggOver(evt, propsArray) RE: egg - SOOOOOOPER MESSY! Please clean this up for more universal use as a rollover. ====================

    eggOver(evt: any, propsArray: Array<string | number>) {
    // eggOver(evt: MouseEvent, propsArray: Array<string | number>) {
        // console.log('');
        // console.log('========== home.component.ts - eggOver(evt: any, propsArray: Array<string | number>) ==========');
        // console.log('this = ' + this + '     evt = ' + evt + '   propsArray = ' + propsArray);
        // console.log('evt.target.id = ' + evt.target.id);
        // console.log('evt.target.firstChild.id = ' + evt.target.firstChild.id);
        // console.log('evt.target.lastChild.id = ' + evt.target.lastChild.id);

        // for (const thisProp of propsArray) {
        //     console.log(thisProp);
        // }

        TweenMax.to(['#' + evt.target.firstChild.id], 0.5, { autoAlpha: propsArray[1], ease: Power3.easeOut });
        TweenMax.to(['#' + evt.target.lastChild.id], 0.5, { autoAlpha: propsArray[2], ease: Power3.easeOut });
    }
}
