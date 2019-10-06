import { Component, OnInit } from '@angular/core';

import { ViewEncapsulation, ElementRef, Input, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewChild, Renderer2 } from '@angular/core';
// import { Url } from 'url';

// ---------- use scss variables in *.ts files - REF: https://mattferderer.com/use-sass-variables-in-typescript-and-javascript ----------
// import styles from './modal.component.scss';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})


// export class ModalComponent implements OnInit {
export class ModalComponent implements OnInit, OnDestroy {

    @Input() id: string;

    @ViewChild('modalApp', { static: true }) public modalApp: ElementRef;
    @ViewChild('modalBody', { static: true }) public modalBody: ElementRef;
    @ViewChild('modalIframe', { static: true }) public modalIframe: ElementRef;

    // @ViewChild('vidModal', { static: true }) public vidModal: ElementRef;
    // @ViewChild('vidBody', { static: true }) public vidBody: ElementRef;
    // @ViewChild('vidIframe', { static: true }) public vidIframe: ElementRef;

    // @ViewChild('html5Modal', { static: true }) public html5Modal: ElementRef;
    // @ViewChild('html5Body', { static: true }) public html5Body: ElementRef;
    // @ViewChild('html5Iframe', { static: true }) public html5Iframe: ElementRef;


    private element: any;

    thisFormat: string;

    videoLoc = 'https://player.vimeo.com/video/';
    // vidWidth = '90vw';
    vidWidth = 0.9 * window.innerWidth;
    vidHeight = this.vidWidth * 9 / 16;

    html5Loc = 'https://www.shigimcp.com/img/';
    flashLoc = 'https://www.shigimcp.com/img/';

    modalLink: any;
    // modalLink: Url;
    // modalLink: Url = 'https://player.vimeo.com/video/325441227';


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
        // // console.log('this.modalService.modalParams[4].format = ' + this.modalService.modalParams[4].format);
        // // console.log('this.modalService.modalParams[4].mwidth = ' + this.modalService.modalParams[4].mwidth);
        // // console.log('this.modalService.modalParams[4].mheight = ' + this.modalService.modalParams[4].mheight);
        // // console.log('this.modalService.modalParams[4].albumIndex = ' + this.modalService.modalParams[4].albumIndex);
        // // console.log('this.modalService.modalParams[4].albumID = ' + this.modalService.modalParams[4].albumID);
        // // console.log('this.modalService.modalParams[4].imageIndex = ' + this.modalService.modalParams[4].imageIndex);


        this.thisFormat = this.modalService.modalParams[4].format;

        switch (this.thisFormat) {

            case 'video': {
                console.log('----- this is a video -----');

                // this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLoc + this.modalService.modalParams[2]);
                this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLoc + this.modalService.modalParams[2] + '?autoplay=1&loop=1&autopause=0');

                // console.log('styles.vidWidth = ' + styles.vidWidth + '     styles.vidHeight = ' + styles.vidHeight);
                // console.log('this.vidWidth = ' + this.vidWidth + '     this.vidHeight = ' + this.vidHeight);

                // this.html5Modal.nativeElement.style.display = 'none';

                // this.modalBody.nativeElement.style.width = '90' + 'vw';
                // this.modalBody.nativeElement.style.height = '90' + 'vw' * 9 / 16;

                // this.modalBody.nativeElement.style.width = styles.vidWidth;
                // this.modalBody.nativeElement.style.height = styles.vidHeight;

                this.modalBody.nativeElement.style.width = this.vidWidth + 'px';
                this.modalBody.nativeElement.style.height = this.vidHeight + 'px';
                this.modalBody.nativeElement.style.background = '#ffffff';

                break;
            }

            case 'html5': {
                console.log('----- this is an html5 presentation -----');

                this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.html5Loc + this.modalService.modalParams[3] + '/' + this.modalService.modalParams[2]);

                // this.vidModal.nativeElement.style.display = 'none';

                // this.html5Body.nativeElement.style.width = this.modalService.modalParams[4].mwidth + 'px';
                // this.html5Body.nativeElement.style.height = this.modalService.modalParams[4].mheight + 'px';

                this.modalBody.nativeElement.style.width = this.modalService.modalParams[4].mwidth + 'px';
                this.modalBody.nativeElement.style.height = this.modalService.modalParams[4].mheight + 'px';
                this.modalBody.nativeElement.style.background = 'none';

                break;
            }

            case 'flash': {
                console.log('----- this is a flash presentation -----');

                this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl('#');
                this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.flashLoc + this.modalService.modalParams[3] + '/' + this.modalService.modalParams[2]);

                // this.html5Modal.nativeElement.style.display = 'none';

                this.modalBody.nativeElement.style.width = this.modalService.modalParams[4].mwidth + 'px';
                this.modalBody.nativeElement.style.height = this.modalService.modalParams[4].mheight + 'px';

                break;
            }

            default: {
                console.log('----- default -----');

                break;
            }
        }

        // this.modalLink = this.modalService.modalParams[2];
        // this.modalLink = this.videoLoc + this.modalService.modalParams[2];
        // this.modalLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLoc + this.modalService.modalParams[2]);

        this.element.style.display = 'block';
        document.body.classList.add('app-modal-open');
    }


    // ---------- close modal ----------

    close(): void {
        // console.log('');
        // console.log('========== modal.component.ts - close() ==========');

        // ---------- stop video - REF: https://mdbootstrap.com/support/angular/video-modal/ ----------
        // const src = this.vidIframe.nativeElement.getAttribute('src');
        // this.renderer.setAttribute(this.vidIframe.nativeElement, 'src', src);

        // const src = this.modalIframe.nativeElement.getAttribute('src');
        // this.renderer.setAttribute(this.modalIframe.nativeElement, 'src', src);
        this.renderer.setAttribute(this.modalIframe.nativeElement, 'src', '');

        this.element.style.display = 'none';
        document.body.classList.remove('app-modal-open');
    }

}
