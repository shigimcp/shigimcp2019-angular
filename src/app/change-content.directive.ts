// import { Directive } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appChangeContent]'
})

export class ChangeContentDirective {

    constructor(
        // private bgText: ElementRef
    ) {}

    // @HostListener('mouseenter') onMouseEnter() {
    //     console.log('');
    //     console.log('=====================================================================');
    //     console.log('========== change-content.directive.ts - ngAfterViewInit() ==========');
    //     console.log('=====================================================================');
    // }

    @HostListener('click', ['$event.target.id']) onClick(id: any) {
        alert(`You clicked on ${id}`);
    }

}
