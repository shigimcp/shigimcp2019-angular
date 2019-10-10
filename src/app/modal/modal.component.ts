import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ElementRef, Input, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewChild, Renderer2 } from '@angular/core';

import { TweenMax, TimelineMax, Power3 } from 'gsap';


declare const getModalDims: any;

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})


export class ModalComponent implements OnInit, OnDestroy {

    @Input() id: string;

    @ViewChild('modalApp', { static: true }) public modalApp: ElementRef;
    @ViewChild('modalBody', { static: true }) public modalBody: ElementRef;
    @ViewChild('modalIframe', { static: true }) public modalIframe: ElementRef;


    private element: any;

    thisFormat: string;

    videoLoc = 'https://player.vimeo.com/video/';
    html5Loc = 'https://www.shigimcp.com/img/';
    flashLoc = 'https://www.shigimcp.com/img/';

    modalLink: any;
    modalDims: Array<any>;

    mWidth: number;
    mHeight: number;
    mScale: number;


    constructor(
        private modalService: ModalService,
        private el: ElementRef,
        private sanitizer: DomSanitizer,
        private renderer: Renderer2
    ) {
        this.element = el.nativeElement;
    }


    ngOnInit() {
        // console.log('');
        // console.log('========== modal.component.ts - ngOnInit() ==========');


        // ---------- initialize modal with a video (otherwise, Error: Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'null') ----------
        // ---------- TO DO: address cookie warnings and 'touch-' event violations ----------

        this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/325441227');


        // ---------- ensure id attribute exists ----------

        if (!this.id) {
            console.error('modal must have an id');
            return;
        }


        // ---------- move element to bottom of page (just before </body>) so it can be displayed above everything else ----------

        document.body.appendChild(this.element);


        // ---------- close modal on background click ----------

        this.element.addEventListener('click', el => {
            if (el.target.className === 'app-modal') {
                this.close();
            }
        });


        // ---------- add self (this modal instance) to the modal service so it's accessible from controllers ----------

        this.modalService.add(this);
    }


    // ---------- remove self from modal service when component is destroyed ----------

    ngOnDestroy(): void {
        // console.log('');
        // console.log('========== modal.component.ts - ngOnDestroy() ==========');

        this.modalService.remove(this.id);
        this.element.remove();
    }


    // ---------- open modal ----------

    open(): void {
        console.log('');
        console.log('========== modal.component.ts - open() ==========');

        // console.log('this.element.id = ' + this.element.id);
        // console.log('document.body.classList = ' + document.body.classList.length);


        // ========== NOTE: this.modalService.modalParams[$event, 'modalApp', image.link, employer.albumID, image] (from employer.component.html) ==========

        // console.log('this.modalService.modalParams = ' + this.modalService.modalParams);
        // console.log('this.modalService.modalParams[3] = ' + this.modalService.modalParams[3]);
        // console.log('this.modalService.modalParams[4] = ' + this.modalService.modalParams[4]);
        // console.log('this.modalService.modalParams[4] = ' + JSON.stringify(this.modalService.modalParams[4]));
        // console.log('this.modalService.modalParams[4].format = ' + this.modalService.modalParams[4].format);
        console.log('this.modalService.modalParams[4].mwidth = ' + this.modalService.modalParams[4].mwidth);
        console.log('this.modalService.modalParams[4].mheight = ' + this.modalService.modalParams[4].mheight);
        // console.log('this.modalService.modalParams[4].albumIndex = ' + this.modalService.modalParams[4].albumIndex);
        // console.log('this.modalService.modalParams[4].albumID = ' + this.modalService.modalParams[4].albumID);
        // console.log('this.modalService.modalParams[4].imageIndex = ' + this.modalService.modalParams[4].imageIndex);


        this.thisFormat = this.modalService.modalParams[4].format;

        this.modalDims = getModalDims(this.modalService.modalParams[4].mwidth, this.modalService.modalParams[4].mheight);


        console.log('');
        console.log('---------- modal.component.ts - FROM custom.js - getModalDims(contentWidth, contentHeight) ----------');
        console.log('this.modalDims = ' + this.modalDims);
        console.log('this.mScale = ' + this.mScale + '     typeof this.mScale = ' + typeof this.mScale);

        this.mWidth = parseFloat(this.modalDims[0]);
        this.mHeight = parseFloat(this.modalDims[1]);
        this.mScale = parseFloat(this.modalDims[2]);

        this.modalBody.nativeElement.style.width = this.mWidth + 'px';
        this.modalBody.nativeElement.style.height = this.mHeight + 'px';


        switch (this.thisFormat) {

            case 'video': {
                console.log('');
                console.log('----- this is a video -----');
                console.log('');

                this.modalIframe.nativeElement.style.width = this.mWidth + 'px';
                this.modalIframe.nativeElement.style.height = this.mHeight + 'px';

                TweenMax.set([this.modalIframe.nativeElement], { x: 0, y: 0, scale: 1, transformOrigin: '0 0' });

                this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLoc + this.modalService.modalParams[2] + '?autoplay=1&loop=1&autopause=0');

                break;
            }

            case 'html5': {
                console.log('');
                console.log('----- this is an html5 presentation -----');

                this.modalIframe.nativeElement.style.width = this.mWidth / this.mScale + 'px';
                this.modalIframe.nativeElement.style.height = this.mHeight / this.mScale + 'px';

                TweenMax.set([this.modalIframe.nativeElement], { x: 0, y: 0, scale: this.mScale, transformOrigin: '0 0' });

                this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.html5Loc + this.modalService.modalParams[3] + '/' + this.modalService.modalParams[2]);

                break;
            }

            case 'flash': {
                console.log('');
                console.log('----- this is a flash presentation -----');

                // this.modalBody.nativeElement.style.width = this.modalDims[0] + 'px';
                // this.modalBody.nativeElement.style.height = this.modalDims[1] + 'px';

                this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.flashLoc + this.modalService.modalParams[3] + '/' + this.modalService.modalParams[2]);

                break;
            }

            default: {
                console.log('----- default -----');

                break;
            }
        }

        this.element.style.display = 'block';
        document.body.classList.add('app-modal-open');
    }


    // ---------- close modal ----------

    close(): void {
        // console.log('');
        // console.log('========== modal.component.ts - close() ==========');

        // ---------- stop video - REF: https://mdbootstrap.com/support/angular/video-modal/ ----------
        this.renderer.setAttribute(this.modalIframe.nativeElement, 'src', '');

        this.element.style.display = 'none';
        document.body.classList.remove('app-modal-open');
    }

}
