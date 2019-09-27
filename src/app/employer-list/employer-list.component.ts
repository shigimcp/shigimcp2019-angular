import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError, first, filter } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

import { EmployerSchema } from '../employer-schema';
import { Employers } from '../../assets/data/employers';
import { EmployerService } from '../employer.service';

import { WorkSchema } from '../work-schema';
import { Work } from '../../assets/data/work';
import { WorkService } from '../work.service';

import { WorkTest } from '../../assets/data/work_test';

@Component({
    selector: 'app-employer-list',
    templateUrl: './employer-list.component.html',
    styleUrls: ['./employer-list.component.scss']
})

export class EmployerListComponent implements OnInit {

    employers = Employers;
    workTest = WorkTest;

    // @Input() employer: EmployerSchema;
    // @Input() work: WorkSchema;

    workKey = 'workList';

    constructor(
        // private http: HttpClient
    ) {}

    ngOnInit() {
        console.log('');
        console.log('===== app-employer-list: ngOnInit =====');

        console.log('this.employers = ' + this.employers);
        console.log('this.workTest = ' + this.workTest);
    }

}
