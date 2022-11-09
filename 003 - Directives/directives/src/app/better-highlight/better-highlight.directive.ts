import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') defaultFontSize: string = '1rem';
  @HostBinding('style.color') fontColor: string = 'black';
  @HostBinding('style.fontSize') fontSize!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'orange'
    );

    this.fontSize = this.defaultFontSize;
  }

  @HostListener('mouseenter') mouseenter() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'purple'
    );

    this.fontColor = 'white';
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'orange'
    );

    this.fontColor = 'black';
  }
}
