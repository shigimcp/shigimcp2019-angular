import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { ThoughtComponent } from '../thought/thought.component';

// import { TweenLite, TimelineLite, Power3 } from 'gsap';
// import { TweenMax, TimelineMax, Power1, Power3 } from 'gsap';
import { TweenMax } from 'gsap';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit, AfterViewInit {

    @ViewChild(ThoughtComponent, {static: false}) childComp: ThoughtComponent;
    // @ViewChildren('appThought') public appThought: QueryList<ElementRef>;

    globalStyles: string;
    aboutStyles: string;

    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        // console.log('');
        // console.log('==========================================================');
        // console.log('========== about.component.ts - ngOnInit() ==========');
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
                this.aboutStyles = 'aboutSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.aboutStyles = 'aboutSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.aboutStyles = 'aboutSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.aboutStyles = 'aboutMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.aboutStyles = 'aboutLg';
            }
        });
    }


    ngAfterViewInit() {
        // console.log('');
        // console.log('==============================================================');
        // console.log('========== about.component.ts - ngAfterViewInit() ==========');
        // console.log('==============================================================');
    }


    resetThoughts() {
        // console.log('');
        // console.log('==========================================================');
        // console.log('========== about.component.ts - resetThoughts() ==========');
        // console.log('==========================================================');

        // console.log('this.childComp.curlSVG = ' + this.childComp.curlSVG);
        // console.log('this.childComp.thoughtBubble = ' + this.childComp.thoughtBubble);

        TweenMax.set(['#thoughtBubbleId'], {autoAlpha: 0});

        this.childComp.curlSVG.forEach((thisCurl, curlIndex) => {
            TweenMax.set([thisCurl.nativeElement], {clearProps: 'all'});
            this.childComp.placeCurls(curlIndex, this.childComp.curlSVG.length, thisCurl.nativeElement);
        });
    }
}
