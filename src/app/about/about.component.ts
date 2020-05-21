import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { ThoughtComponent } from '../thought/thought.component';

// import { TweenLite, TimelineLite, Power3 } from 'gsap';
// import { TweenMax, TimelineMax, Power1, Power3 } from 'gsap';
import { TweenMax } from 'gsap';


declare const showMe: any;
declare const getDims: any;

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit, AfterViewInit {

    @ViewChild(ThoughtComponent) childComp: ThoughtComponent;
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

        // showMe('visible');
        showMe('shigeru', 'visible');
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


        // -------------------- getDims --------------------

        this.childComp.afroDims = getDims('logoAboutId');
        this.childComp.afroX = this.childComp.afroDims[0];
        this.childComp.afroY = this.childComp.afroDims[1];
        this.childComp.afroW = this.childComp.afroDims[2];
        this.childComp.afroH = this.childComp.afroDims[3];

        this.childComp.thoughtDims = getDims('thoughtBubbleId');
        this.childComp.thoughtW = this.childComp.thoughtDims[2];
        this.childComp.thoughtH = this.childComp.thoughtDims[3];

        this.childComp.curlDims = getDims(this.childComp.curlSVG.first.nativeElement.id);
        this.childComp.curlW = this.childComp.curlDims[2];
        this.childComp.curlH = this.childComp.curlDims[3];

        this.childComp.boingDims = getDims(this.childComp.boingSVG.nativeElement.id);
        this.childComp.boingW = this.childComp.boingDims[2];
        this.childComp.boingH = this.childComp.boingDims[3];


        TweenMax.set(['#thoughtBubbleId'], {autoAlpha: 0});

        this.childComp.curlSVG.forEach((thisCurl, curlIndex) => {
            TweenMax.set([thisCurl.nativeElement], {clearProps: 'all'});
            this.childComp.placeCurls(curlIndex, this.childComp.curlSVG.length, thisCurl.nativeElement);
        });
    }
}
