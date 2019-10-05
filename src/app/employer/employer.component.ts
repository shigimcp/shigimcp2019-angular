import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { CarouselComponent } from 'angular-bootstrap-md';
import { ModalService } from '../modal/modal.service';
// import { ElementRef } from '@angular/core';


@Component({
    selector: 'app-employer',
    templateUrl: './employer.component.html',
    styleUrls: ['./employer.component.scss']
})

export class EmployerComponent implements OnInit {

    @Input() work: any;
    @Input() employer: any;
    @Input() images: any;

    @ViewChild(CarouselComponent, { static: true }) public carousel: CarouselComponent;


    // imageLoc = 'http://www.shigimcp.com/Xstage/shigimcp_2019/img/slides_angular_01/';
    // imageLoc = 'http://www.shigimcp.com/Xstage/shigimcp_2019/img/slides_angular_02/';
    imageLoc = 'http://shigimcp.com/Xstage/angular_github/img/slides_angular_02/';
    slideLoc = 'sl/';
    thumbLoc = 'th/';

    globalStyles: string;
    employerStyles: string;
    thumbStyles: string;


    constructor(
        public breakpointObserver: BreakpointObserver,
        private modalService: ModalService
    ) { }


    ngOnInit() {
        // console.log('');
        // console.log('========== employer.component.ts - ngOnInit() ==========');

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
                this.employerStyles = 'employerSm';
                this.thumbStyles = 'thumbSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.employerStyles = 'employerSm';
                this.thumbStyles = 'thumbSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.employerStyles = 'employerSm';
                this.thumbStyles = 'thumbSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.employerStyles = 'employerMd';
                this.thumbStyles = 'thumbMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.employerStyles = 'employerLg';
                this.thumbStyles = 'thumbLg';
            }
        });
    }


    goToImage(imageIndex: number) {
        // console.log('PING!!! goToImage(imageIndex: number) triggered!');
        console.log('imageIndex = ' + imageIndex);

        // this.getElementsByClassName('.bg_txt').nativeElement.innerHtml = thisEmployer;
        // this.bgText = thisEmployer;
        this.carousel.selectSlide(imageIndex);
    }


    openModal(modalParams: Array<any>) {
        console.log('');
        console.log('========== employer.component.ts - openModal(modalParams: Array<any>) ==========');

        // console.log('modalParams = ' + modalParams);

        // console.log('');
        // // console.log('evt = ' + modalParams[0].type + '     id = ' + modalParams[1] + '     thisLink = ' + modalParams[2] + '     thisImg = ' + modalParams[4]);
        // console.log('evt = modalParams[0].type = ' + modalParams[0].type);
        // console.log('id = modalParams[1] = ' + modalParams[1]);
        // console.log('thisLink = modalParams[2] = ' + modalParams[2]);
        // console.log('thisImg = modalParams[4] = ' + modalParams[4]);

        // console.log('');
        // console.log('JSON.stringify(modalParams[4] = ' + JSON.stringify(modalParams[4]));
        console.log('modalParams[4].format = ' + modalParams[4].format);

        this.modalService.open(modalParams);
    }


    closeModal(id: string) {
        // console.log('');
        // console.log('========== employer.component.ts - closeModal(id: string) ==========');

        this.modalService.close(id);
    }
}
