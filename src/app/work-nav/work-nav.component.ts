import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormControl} from '@angular/forms';

import { Work } from '../../assets/data/work';


@Component({
    selector: 'app-work-nav',
    templateUrl: './work-nav.component.html',
    styleUrls: ['./work-nav.component.scss']
})


export class WorkNavComponent {
    mode = new FormControl('over');

    work = Work;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) {}


    goToEmployer(thisEmployer: string) {
        console.log('');
        console.log('========== work-nav.component.ts - goToEmployer(thisEmployer: string) ==========');

        console.log('thisEmployer = ' + thisEmployer);

        // this.getElementsByClassName('.bg_txt').nativeElement.innerHtml = thisEmployer;
        // this.bgText = thisEmployer;
    }
}
