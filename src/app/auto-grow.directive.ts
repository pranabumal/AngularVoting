import {Directive,ElementRef,Renderer} from '@angular/core';
@Directive({
    selector:'[auto]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective{

    constructor(private el:ElementRef, private renderar:Renderer){

    }
    onFocus(){
        console.log(this.el);
     this.renderar.setElementStyle(this.el.nativeElement, 'width','300px');
    }
    onBlur(){
     this.renderar.setElementStyle(this.el.nativeElement, 'width','40px');

    }
}