import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';

// import { Employers } from '../assets/data/employers';
// import { EmployerSchema } from './employer-schema';

// import { Work } from '../assets/data/work';
// import { WorkSchema } from './work-schema';

@Injectable({
    providedIn: 'root'
})

export class WorkService {

    thisEmployer: string;

    constructor(
        // private http: HttpClient,
    ) { }

    // getWork() {
    //     return Work;
    // }


    // getWork(): Observable<WorkSchema[]> {
    //     return of(Work);
    // }

    // getWork(thisEmployer: EmployerSchema): Observable<WorkSchema[]> {
    //     console.log('');
    //     console.log('===== WorkService: getWork(thisEmployer: EmployerSchema) =====');

    //     console.log('thisEmployer = ' + thisEmployer);

    //     return this.http.get<WorkSchema[]>(thisEmployer)
    //         .pipe(
    //             catchError(this.handleError('getWork', thisEmployer))
    //         );
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
