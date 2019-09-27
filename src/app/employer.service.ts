import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { map, filter } from 'rxjs/operators';

// import { EmployerSchema } from './employer-schema';
// import { WorkSchema } from './work-schema';

// import { Employers } from '../assets/data/employers';
// import { Work } from '../assets/data/work';


@Injectable({
    providedIn: 'root'
})

export class EmployerService {

    // private work: Observable<WorkSchema[]>;
    // work: WorkSchema;

    constructor(
        // private http: HttpClient,
    ) { }

    // public employerList = './assets/data/employers.json';

    // getEmployers() {
    //     return Employers;
    // }

    // getEmployers(): Observable<EmployerSchema[]> {
    //     return of(Employers);
    // }

    // getEmployers(): Observable<EmployerSchema[]> {
    //     console.log('EmployerService: getEmployers called!');

    //     return this.http.get<EmployerSchema[]>(this.employerList)
    //         .pipe(
    //             catchError(this.handleError('getEmployers', []))
    //         );
    // }

    // getWork() {
    //     return Work;
    // }

    // getWork(): Observable<WorkSchema[]> {
    //     return this.http.get<WorkSchema[]>(this.work)
    //         .pipe(
    //             catchError(this.handleError('getWork', []))
    //         );
    // }

    // getWork(thisEmployer): Observable<WorkSchema[]> {
    //     return this.http.get<WorkSchema[]>(thisEmployer)
    //         .pipe(
    //             catchError(this.handleError('getWork', thisEmployer))
    //         );
    // }

    // getWork(thisEmployer: string) {
    //     return this.work
    //         .pipe(work => work.filter(proj => proj.thisEmployer === thisEmployer, console.log('this.work[thisEmployer.albumIndex] = ' + this.work[thisEmployer].albumID)));
    // }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        // console.error('PING!!! PING!!! PING!!!' + error); // log to console instead
        console.error('ERROR!!! ERROR!!! ERROR!!! ' + JSON.stringify(error)); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
        console.log('result = ' + result);

        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
}
