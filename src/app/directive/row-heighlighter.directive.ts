/* Mouse over anywhere on Row and it changes color of Movie label and movie rating */
import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRowHeighlighter]'
})
export class RowHeighlighterDirective {

  constructor(private el: ElementRef) { }

/* read movie rating from "tr" tag of table */
  @Input() ratingValue:number;

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    switch (+(this.ratingValue)) {
      case 1:
        this.highlight('Red');
        break;
      case 2:
        this.highlight('Orange');
        break;
      case 3:
        this.highlight('Yellow');
        break;
      case 4:
        this.highlight('Blue');
        break;
      case 5:
        this.highlight('Green');
        break;
      default:
        this.highlight('Null');
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

/* On Row mouseover it checks the rating value and changes the 
   backgroundcolor of movie name and rating column */
  private highlight(color: string) {
     this.el.nativeElement.cells[1].style.backgroundColor = color;
     this.el.nativeElement.cells[2].style.backgroundColor = color;
  }
}
