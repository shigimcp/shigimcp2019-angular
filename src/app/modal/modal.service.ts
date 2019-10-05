import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class ModalService {

    private modals: any[] = [];

    // public vidlink: string;
    public modalParams: Array<any>;

    constructor() { }


    // ---------- add modal to array of active modals ----------

    add(modal: any) {
        // console.log('');
        // console.log('========== modal.service.ts - add(modal: any) ==========');

        this.modals.push(modal);
    }


    // ---------- remove modal from array of active modals ----------

    remove(id: string) {
        // console.log('');
        // console.log('========== modal.service.ts - remove(id: string) ==========');

        // this.modals = this.modals.filter(x => x.id !== id);
        this.modals = this.modals.filter(thisModal => thisModal.id !== id);
    }


    // ---------- open modal specified by id ----------

    // open(id: string) {
    open(modalParams: Array<any>) {
        console.log('');
        console.log('========== modal.service.ts - open(modalParams: Array<any>) ==========');

        // console.log('id = ' + id);
        console.log('modalParams = ' + modalParams);

        // const modal = this.modals.find(x => x.id === id);
        const modal = this.modals.find(thisModal => thisModal.id === modalParams[1]);

        this.modalParams = modalParams;
        // console.log('this.modalParams = ' + this.modalParams);

        modal.open();
    }


    // ---------- close modal specified by id ----------

    close(id: string) {
        // console.log('');
        // console.log('========== modal.service.ts - close(id: string) ==========');

        // const modal = this.modals.find(x => x.id === id);
        const modal = this.modals.find(thisModal => thisModal.id === id);
        modal.close();
    }
}
