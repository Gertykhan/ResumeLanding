import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  nextFunc(){
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = elm.getElementsByClassName("slider-item");
    elm.append(item[0]);
    console.log(item);
  }
}
