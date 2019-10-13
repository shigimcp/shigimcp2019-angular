import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ModalService } from '../modal/modal.service';

import { Work } from '../../assets/data/work';


declare const showMe: any;


@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {

    work = Work;

    globalStyles: string;
    workStyles: string;

    bgText = 'mimi';

    constructor(
        public breakpointObserver: BreakpointObserver,
        private modalService: ModalService
    ) { }


    ngOnInit() {
        // console.log('');
        // console.log('========== work.component.ts - ngOnInit() ==========');

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
                this.workStyles = 'workSm';
            }

            if (state.breakpoints[Breakpoints.Small]) {
                // console.log( 'Matches Small viewport - Breakpoints.Small: min-width equals 600px and max-width equals 959.99px');
                this.globalStyles = 'globalSm';
                this.workStyles = 'workSm';
            }

            if (state.breakpoints[Breakpoints.Medium]) {
                // console.log( 'Matches Medium viewport - Breakpoints.Medium: min-width equals 960px and max-width equals 1279.99px');
                this.globalStyles = 'globalSm';
                this.workStyles = 'workSm';
            }

            if (state.breakpoints[Breakpoints.Large]) {
                // console.log( 'Matches Large viewport - Breakpoints.Large: min-width equals 1280px and max-width equals 1919.99px');
                this.globalStyles = 'globalMd';
                this.workStyles = 'workMd';
            }

            if (state.breakpoints[Breakpoints.XLarge]) {
                // console.log( 'Matches XLarge viewport - Breakpoints.XLarge: min-width equals 1920px');
                this.globalStyles = 'globalLg';
                this.workStyles = 'workLg';
            }
        });

        showMe('hidden');
    }


    goToEmployer(thisEmployer: string) {
        // console.log('');
        // console.log('========== work.component.ts - goToEmployer(thisEmployer: string) ==========');

        // console.log('thisEmployer = ' + thisEmployer);

        // this.getElementsByClassName('.bg_txt').nativeElement.innerHtml = thisEmployer;
        this.bgText = thisEmployer;
    }
}
