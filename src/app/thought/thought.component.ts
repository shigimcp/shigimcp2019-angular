import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ViewChildren, QueryList } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

// import { TweenLite, TimelineLite, Power3 } from 'gsap';
import { TweenMax, TimelineMax, Power3 } from 'gsap';
import MorphSVGPlugin from 'gsap/bonus/MorphSVGPlugin';

import { About } from '../../assets/data/about';


// protect from tree shaking by referencing the GSAP plugin(s)
const plugins = [ MorphSVGPlugin ];


// declare const consoleLog: any;
declare const randRange: any;
declare const getDims: any;


@Component({
    selector: 'app-thought',
    templateUrl: './thought.component.html',
    styleUrls: ['./thought.component.scss']
})


export class ThoughtComponent implements OnInit, AfterViewInit {

    @ViewChildren('curlSVG') public curlSVG: QueryList<ElementRef>;

    @ViewChild('boingSVG', {static: false}) public boingSVG: ElementRef;
    @ViewChild('boingLf', {static: false}) public boingLf: ElementRef;
    @ViewChild('boingRt', {static: false}) public boingRt: ElementRef;

    @ViewChild('thoughtBubble', {static: false}) public thoughtBubble: ElementRef;


// -------------------- generic --------------------

    thisObject: Element;
    thisObjectDims: Array<number>;
    thisX: number;
    thisY: number;
    thisW: number;
    thisH: number;


// -------------------- placeCurls --------------------

    thoughts: any = About;
    thought = 'thought sample';
    aside = 'aside sample';

    theta = 0;
    thetaMin: number;
    thetaMax: number;
    deltaTheta: number;
    thetaArray = [0, 0, 190];

    radFactor = 0.9;
    radX: number;
    radY: number;
    radian: number;


// -------------------- basic dims --------------------

    afroDims: Array<number>;
    afroX: number;
    afroY: number;
    afroW: number;
    afroH: number;

    thoughtDims: Array<number>;
    thoughtW: number;
    thoughtH: number;

    curlDims: Array<number>;
    curlW: number;
    curlH: number;

    boingDims: Array<number>;
    boingW: number;
    boingH: number;

    boingScale: number;


// -------------------- boing (animation) --------------------

    animPath: any;

    thisCurl: Element;
    thisCurlDims: Array<number>;
    thisCurlX: number;
    thisCurlY: number;
    thisCurlW: number;
    thisCurlH: number;

    deltaX: number;
    deltaY: number;
    rotation: number;

    showThoughtTL: TimelineMax;


// -------------------- styles --------------------

    globalStyles: string;
    thoughtStyles: string;
    curlSVGstyles: string;
    boingStyles: string;


// -------------------- angular functions --------------------

    constructor(public breakpointObserver: BreakpointObserver) { }


    ngOnInit() {
        // console.log('');
        // console.log('=======================================================');
        // console.log('========== thought.component.ts - ngOnInit() ==========');
        // console.log('=======================================================');

        // console.log('MorphSVGPlugin.version = ' + MorphSVGPlugin.version);

        TweenMax.set(['#thoughtBubbleId'], {autoAlpha: 0});

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
                this.thoughtStyles = 'thoughtBubbleSm';
                this.curlSVGstyles = 'curlSVGsm';
                this.boingStyles = 'boingSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.thoughtStyles = 'thoughtBubbleSm';
                this.curlSVGstyles = 'curlSVGsm';
                this.boingStyles = 'boingSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.thoughtStyles = 'thoughtBubbleSm';
                this.curlSVGstyles = 'curlSVGsm';
                this.boingStyles = 'boingSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.thoughtStyles = 'thoughtBubbleMd';
                this.curlSVGstyles = 'curlSVGmd';
                this.boingStyles = 'boingMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.thoughtStyles = 'thoughtBubbleLg';
                this.curlSVGstyles = 'curlSVGlg';
                this.boingStyles = 'boingLg';
            }
        });
    }


    ngAfterViewInit() {
        // console.log('');
        // console.log('==============================================================');
        // console.log('========== thought.component.ts - ngAfterViewInit() ==========');
        // console.log('==============================================================');

        // -------------------- curlSVG --------------------

        // console.log('this = ', this);
        // console.log('this.curlSVG = ', this.curlSVG);
        // console.log('this.curlSVG.length = ', this.curlSVG.length);
        // console.log('this.curlSVG.first.nativeElement.id = ', this.curlSVG.first.nativeElement.id);
        // console.log('this.curlSVG.last.nativeElement.id = ', this.curlSVG.last.nativeElement.id);
        // console.log('this.curlSVG.first.nativeElement.children[0].id = ', this.curlSVG.first.nativeElement.children[0].id);
        // console.log('this.curlSVG.first.nativeElement.children[1].id = ', this.curlSVG.first.nativeElement.children[1].id);


        // -------------------- boingSVGs --------------------

        // console.log('');
        // console.log('this.boingSVG = ', this.boingSVG);
        // console.log('this.boingSVG.nativeElement = ', this.boingSVG.nativeElement);
        // console.log('this.boingSVG.nativeElement.id = ', this.boingSVG.nativeElement.id);

        // console.log('');
        // console.log('this.boingLf = ', this.boingLf);
        // console.log('this.boingLf.nativeElement = ', this.boingLf.nativeElement);
        // console.log('this.boingLf.nativeElement.id = ', this.boingLf.nativeElement.id);

        // console.log('');
        // console.log('this.boingRt = ', this.boingRt);
        // console.log('this.boingRt.nativeElement = ', this.boingRt.nativeElement);
        // console.log('this.boingRt.nativeElement.id = ', this.boingRt.nativeElement.id);


        // -------------------- getDims --------------------

        this.afroDims = getDims('logoAboutId');
        this.afroX = this.afroDims[0];
        this.afroY = this.afroDims[1];
        this.afroW = this.afroDims[2];
        this.afroH = this.afroDims[3];

        this.thoughtDims = getDims('thoughtBubbleId');
        this.thoughtW = this.thoughtDims[2];
        this.thoughtH = this.thoughtDims[3];

        this.curlDims = getDims(this.curlSVG.first.nativeElement.id);
        this.curlW = this.curlDims[2];
        this.curlH = this.curlDims[3];

        this.boingDims = getDims(this.boingSVG.nativeElement.id);
        this.boingW = this.boingDims[2];
        this.boingH = this.boingDims[3];


        // console.log('');
        // console.log('this.afroDims = ' + this.afroDims);
        // console.log('this.thoughtDims = ' + this.thoughtDims);
        // console.log('this.curlDims = ' + this.curlDims);
        // console.log('this.boingDims = ' + this.boingDims);


        this.curlSVG.forEach((thisCurl, curlIndex) => {
            // console.log('');
            // console.log('curlIndex = ' + curlIndex);
            // console.log('thisCurl.nativeElement.id = ' + thisCurl.nativeElement.id);

            this.placeCurls(curlIndex, this.curlSVG.length, thisCurl.nativeElement);
        });
    }


// -------------------- custom functions --------------------

    placeCurls(thoughtIndex: number, numThoughts: number, thisElem: any) {
        // console.log('');
        // console.log('==============================================================================================');
        // console.log('========== thought.component.ts - placeCurls(thoughtIndex, numThoughts, thisElem) ==========');
        // console.log('==============================================================================================');

        // console.log('thoughtIndex = ' + thoughtIndex);
        // console.log('numThoughts = ' + numThoughts);
        // console.log('thisElem = ' + thisElem);
        // console.log('thisElem.id = ' + thisElem.id);

        // console.log('this.afroDims = ' + this.afroDims);
        // console.log('this.curlDims = ' + this.curlDims);

        // console.log('');
        // console.log('-------------------- thought.component.ts - placeCurls(thoughtIndex, numThoughts, thisElem) --------------------');


        // -------------------- place curls --------------------

        this.deltaTheta = -((this.thetaArray[2] - this.thetaArray[1]) / numThoughts) / 180 * Math.PI;

        // console.log('this.deltaTheta = ' + this.deltaTheta);


        // this.radX = randRange((this.afroW / 2), (this.afroW / 2)) * this.radFactor;
        // this.radY = randRange((this.afroH / 2), (this.afroH / 2)) * this.radFactor;
        this.radX = randRange((this.afroW / 5), (this.afroW / 2)) * this.radFactor;
        this.radY = randRange((this.afroH / 5), (this.afroH / 2)) * this.radFactor;

        // console.log('this.radX = ' + this.radX + '     this.radY = ' + this.radY);


        this.thisX = Math.round(this.radX * (Math.cos(this.thetaArray[0]))) + (window.innerWidth * 0.5);
        this.thisY = Math.round(this.radY * (Math.sin(this.thetaArray[0]))) + (window.innerHeight * 0.75);

        // console.log('this.thisX = ' + this.thisX + '     this.thisY = ' + this.thisY);


        // -------------------- rotate curls --------------------

        this.deltaX = this.thisX - (window.innerWidth / 2);
        this.deltaY = this.thisY - (this.afroY + this.afroH / 2);
        this.rotation = (Math.atan2(this.deltaY, this.deltaX)) * (180 / Math.PI) + 90;

        // console.log('this.deltaX = ' + this.deltaX + '     this.deltaY = ' + this.deltaY + '     this.rotation = ' + this.rotation);


        // -------------------- set curls --------------------

        TweenMax.set([thisElem], { x: this.thisX, y: this.thisY, xPercent: -50, yPercent: -50, rotation: this.rotation, transformOrigin: '50% 50%' });


        // -------------------- new this.theta for next curl --------------------

        if (thoughtIndex < numThoughts - 1) {
            this.thetaArray[0] = this.thetaArray[0] + this.deltaTheta;
            // console.log('this.thetaArray[0] = ' + this.thetaArray[0]);
        } else {
            // this.thetaArray = [];
            this.thetaArray[0] = this.theta;
            // console.log('this.thetaArray[0] = ' + this.thetaArray[0]);
        }
    }


    closeThought() {
        // console.log('');
        // console.log('===================================================');
        // console.log('========== showThought(thisCurl: string) ==========');
        // console.log('===================================================');

        TweenMax.to(['#thoughtBubbleId'], 0.5, {autoAlpha: 0, ease: Power3.easeOut});
    }


    showThought(animPath: any, thisCurl: HTMLElement, thisCurlX: number, thisCurlY: number, thisX: number, thisY: number) {
        // console.log('');
        // console.log('===================================================');
        // console.log('========== showThought(thisCurl: string) ==========');
        // console.log('===================================================');

        // console.log('animPath = ' + animPath);
        // console.log('thisCurl.id = ' + thisCurl.id + '     thisCurlX = ' + thisCurlX + '     thisCurlY = ' + thisCurlY);
        // console.log('thisX = ' + thisX + '     thisY = ' + thisY);

        // console.log('window.innerWidth = ' + window.innerWidth);
        // console.log('this.thoughtW = ' + this.thoughtW);
        // console.log('window.innerWidth - this.thoughtW = ' + (window.innerWidth - this.thoughtW));

        if (thisX >= window.innerWidth - this.thoughtW) {
            thisX = window.innerWidth - this.thoughtW;
        } else if (thisX <= 0) {
            thisX = 0;
        }

        this.showThoughtTL = new TimelineMax({delay: 0});

        this.showThoughtTL
            // .call(consoleLog, [ 'showThought FRAME 01 BEGIN!!!' ], 'frame01')
            // console.log('-------------------- set boing path & thoughtBubble --------------------');

            .set([this.boingSVG.nativeElement], {x: thisCurlX, y: thisCurlY, svgOrigin: '0 0'}, 'frame01 +=0')
            .set(['#thoughtBubbleId'], {x: thisX, y: thisY, svgOrigin: '50% 50%'}, 'frame01 +=0')


            // console.log('-------------------- animate curl & thoughtBubble --------------------');

            .to([thisCurl], 1, {bezier: { values: animPath, type: 'cubic', autoRotate: 90 }, ease: Power3.easeOut }, 'frame01 +=0')
            // .to([thisCurl], 1, {autoAlpha: 0, bezier: { values: animPath, type: 'cubic', autoRotate: 90 }, ease: Power3.easeOut }, 'frame01 +=0')

            .fromTo(['#thoughtBubbleId'], 0.5, {scale: 0.95, autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: Power3.easeOut}, 'frame01 +=0.25')

            .set([thisCurl], {autoAlpha: 0}, 'frame01 +=0.375')
        ;

        // return this.showThoughtTL;
    }


    boing(evt: MouseEvent, thisThought: { about_index: number; thought: string; aside: string; brain: string; }) {
        // console.log('');
        // console.log('================================================================================');
        // console.log('========== thought.component.ts - boing(evt: MouseEvent) = ' + evt.type + ' ==========');
        // console.log('================================================================================');

        // console.log('this.afroDims = ' + this.afroDims);
        // console.log('this.thoughtDims = ' + this.thoughtDims);
        // console.log('this.curlDims = ' + this.curlDims);
        // console.log('this.boingDims = ' + this.boingDims);

        // console.log('');
        // console.log('thisThought = ' + thisThought);
        // console.log('thisThought.about_index = ' + thisThought.about_index);
        // console.log('thisThought.thought = ' + thisThought.thought);
        // console.log('thisThought.aside = ' + thisThought.aside);
        // console.log('thisThought.brain = ' + thisThought.brain);


        if (evt.type === 'mouseenter') {

            // console.log('');
            // console.log('================================================================================');
            // console.log('========== thought.component.ts - boing(evt: MouseEvent) = ' + evt.type + ' ==========');
            // console.log('================================================================================');

            // console.log('evt.target = ' + (evt.target as Element).parentElement.id);

            // console.log('this.afroDims = ' + this.afroDims);
            // console.log('this.thoughtDims = ' + this.thoughtDims);
            // console.log('this.curlDims = ' + this.curlDims);
            // console.log('this.boingDims = ' + this.boingDims);

            // console.log('');
            // console.log('thisThought = ' + thisThought);
            // console.log('thisThought.about_index = ' + thisThought.about_index);
            // console.log('thisThought.thought = ' + thisThought.thought);
            // console.log('thisThought.aside = ' + thisThought.aside);
            // console.log('thisThought.brain = ' + thisThought.brain);

            // console.log('');
            // console.log('this.boingSVG = ' + this.boingSVG);
            // console.log('this.boingSVG.nativeElement.id = ' + this.boingSVG.nativeElement.id);


            this.thought = thisThought.thought;
            this.aside = thisThought.aside;


            if (thisThought.brain === 'left') {

                this.thisCurlDims = getDims((evt.target as Element).id);
                this.thisCurlX = this.thisCurlDims[0];
                // this.thisCurlY = this.thisCurlDims[1];
                this.thisCurlW = this.thisCurlDims[2];
                this.thisCurlH = this.thisCurlDims[3];

                this.thisCurlY = this.thisCurlDims[1] - (this.boingH - this.thisCurlH);

                // console.log('');
                // console.log('this.thisCurlDims = ' + this.thisCurlDims);


                // console.log('');
                // console.log('-------------------- this.animPath = MorphSVGPlugin.pathDataToBezier (left) --------------------');

                this.animPath = MorphSVGPlugin.pathDataToBezier( '#boingLfID', {align: '#curlSVG' + thisThought.about_index, matrix: [ 1, 0, 0, 1, this.thisCurlX, this.thisCurlY ]} );

                // console.log('');
                // console.log('this.animPath = ' + this.animPath);
                // console.log('this.animPath.length = ' + this.animPath.length);


                // console.log('');
                // console.log('-------------------- thought bubble (left) --------------------');

                this.thisX = this.thisCurlX + this.thisCurlW;
                this.thisY = this.thisCurlY - ((this.thoughtH - this.boingH) / 2);


                // console.log('');
                // console.log('-------------------- curl orientation (left) --------------------');

                this.showThought(this.animPath, (evt.target as Element).parentElement, this.thisCurlX, this.thisCurlY, this.thisX, this.thisY);

            } else {

                this.thisCurlDims = getDims((evt.target as Element).id);
                // this.thisCurlX = this.thisCurlDims[0];
                // this.thisCurlY = this.thisCurlDims[1];
                this.thisCurlW = this.thisCurlDims[2];
                this.thisCurlH = this.thisCurlDims[3];

                this.thisCurlX = this.thisCurlDims[0] - (this.boingW - this.thisCurlW);
                this.thisCurlY = this.thisCurlDims[1] - (this.boingH - this.thisCurlH);

                // console.log('');
                // console.log('this.thisCurlDims = ' + this.thisCurlDims);


                // console.log('');
                // console.log('-------------------- this.animPath = MorphSVGPlugin.pathDataToBezier (right) --------------------');

                this.animPath = MorphSVGPlugin.pathDataToBezier( '#boingLfID', {align: '#curlSVG' + thisThought.about_index, matrix: [ -1, 0, 0, 1, (this.thisCurlDims[0] + this.thisCurlW), this.thisCurlY ]} );

                // console.log('');
                // console.log('this.animPath = ' + this.animPath);
                // console.log('this.animPath.length = ' + this.animPath.length);


                // console.log('');
                // console.log('-------------------- thought bubble (right) --------------------');

                this.thisX = this.thisCurlX - (this.thoughtW - this.boingW) - this.thisCurlW;
                this.thisY = this.thisCurlY - ((this.thoughtH - this.boingH) / 2);


                // console.log('');
                // console.log('-------------------- curl orientation (left) --------------------');

                TweenMax.set(['#curlSVG' + thisThought.about_index], { scale: -1 });

                this.showThought(this.animPath, (evt.target as Element).parentElement, this.thisCurlX, this.thisCurlY, this.thisX, this.thisY);
            }
        }
    }
}
