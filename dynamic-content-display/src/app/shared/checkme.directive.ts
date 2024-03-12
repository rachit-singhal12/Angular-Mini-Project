import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCheckme]'
})
export class CheckmeDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.color = "white";
    this.el.nativeElement.style.backgroundColor = "black";
    this.el.nativeElement.style.padding = "10px";
   }

}
