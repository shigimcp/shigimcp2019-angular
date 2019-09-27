import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { tap, map, catchError, first, filter } from 'rxjs/operators';
// import { Observable, pipe } from 'rxjs';

// import { EmployerSchema } from '../employer-schema';
// import { Employers } from '../../assets/data/employers';
// import { EmployerService } from '../employer.service';

// import { WorkSchema } from '../work-schema';
// import { Work } from '../../assets/data/work';
// import { WorkService } from '../work.service';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



// REF: https://www.positronx.io/read-local-json-files-in-angular/
// import workPositronx from '../../assets/data/work_positronx.json';


import workComplete from '../../assets/data/work.json';


@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {

    // employers = Employers;
    // work = Work;

    // workP: any = workPositronx;

    work: any = workComplete;

    globalStyles: string;
    workStyles: string;

    bgText = 'mimi';


    constructor(public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {

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
    }



    goToEmployer(thisEmployer: string) {
        console.log('thisEmployer = ' + thisEmployer);
        // this.getElementsByClassName('.bg_txt').nativeElement.innerHtml = thisEmployer;
        this.bgText = thisEmployer;
    }
}
