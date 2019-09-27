import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { tap, map, catchError, first, filter } from 'rxjs/operators';
// import { Observable, pipe } from 'rxjs';

// import { EmployerSchema } from '../employer-schema';
// import { Employers } from '../../assets/data/employers';
// import { EmployerService } from '../employer.service';

// import { WorkSchema } from '../work-schema';
// import { Work } from '../../assets/data/work';
// import { WorkService } from '../work.service';

import { CarouselComponent } from 'angular-bootstrap-md';
import { ViewChild } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



// REF: https://www.positronx.io/read-local-json-files-in-angular/
// import workPositronx from '../../assets/data/work_positronx.json';
// import workComplete from '../../assets/data/work.json';


@Component({
    selector: 'app-employer',
    templateUrl: './employer.component.html',
    styleUrls: ['./employer.component.scss']
})

export class EmployerComponent implements OnInit {

    // @Input() employer: EmployerSchema;
    // @Input() work: WorkSchema;
    // @Input() workP: any;


    @Input() work: any;
    @Input() employer: any;
    @Input() images: any;

    @ViewChild(CarouselComponent, { static: true })

    public carousel: CarouselComponent;


    // imageLoc = 'http://www.shigimcp.com/Xstage/shigimcp_2019/img/slides_angular_01/';
    imageLoc = 'http://www.shigimcp.com/Xstage/shigimcp_2019/img/slides_angular_02/';
    slideLoc = 'sl/';
    thumbLoc = 'th/';


    globalStyles: string;
    employerStyles: string;
    thumbStyles: string;


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


    goToImage(imageIndex) {
        console.log('imageIndex = ' + imageIndex);
        // this.getElementsByClassName('.bg_txt').nativeElement.innerHtml = thisEmployer;
        // this.bgText = thisEmployer;
        this.carousel.selectSlide(imageIndex);
    }
}
