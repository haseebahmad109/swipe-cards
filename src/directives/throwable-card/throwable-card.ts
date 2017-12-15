import { 
  Directive,
  EventEmitter,
  Input,
  Output,
  HostListener,
  HostBinding
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the ThrowableCardDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[throwable-card]' // Attribute selector
})
export class ThrowableCardDirective {

  isDragging:boolean = false;
  deltaX:number = 0;
  deltaY:number = 0;

  @Input('rotateValue')
  rotateValue = 5;

  @Input('throwThreshhold')
  throwThreshhold = 100;

  @Output('throwLeft')
  throwLeft = new EventEmitter();

  @Output('throwRight')
  throwRight = new EventEmitter();

  @HostBinding('style.transform')
  transform:any = 'translate3d(0, 0, 0)';
  @HostBinding('style.webkitTransform')
  webkitTransform:any = 'translate3d(0, 0, 0)';
  @HostBinding('style.msTransform')
  msTransform:any = 'translate3d(0, 0, 0)';
  @HostBinding('style.mozTransform')
  mozTransform:any = 'translate3d(0, 0, 0)';

  @HostBinding('style.transition')
  transition:any = '';

  @HostBinding('class.left')
  leftCssClass:boolean = false;

  @HostBinding('class.right')
  rightCssClass:boolean = false;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  updateStyle(){
    if(this.isDragging){
      var _transform = 'translate3d('+this.deltaX+'px,0,0)';
    }else{
      _transform = 'translate3d(0,0,0)';
    }
    this.transform = this.sanitizer.bypassSecurityTrustStyle(_transform);
    this.webkitTransform = this.sanitizer.bypassSecurityTrustStyle(_transform);
    this.msTransform = this.sanitizer.bypassSecurityTrustStyle(_transform);
    this.mozTransform = this.sanitizer.bypassSecurityTrustStyle(_transform);

    this.leftCssClass = this.isDragging && this.deltaX < -this.throwThreshhold;
    this.rightCssClass = this.isDragging && this.deltaX > this.throwThreshhold;
  }

  updateDeltaPosition(event){
    this.deltaX = event.deltaX; 
    this.deltaY = event.deltaY; 
    this.updateStyle();
  }

  initThrowLeft(){
    this.deltaX = -500;
    this.transition = 'transform 300ms ease-in';
    this.updateStyle();
    this.throwLeft.emit();
    
  }
  initThrowRight(){
    this.deltaX = 500;
    this.transition = 'transform 300ms ease-in';
    this.updateStyle();
    this.throwRight.emit();
  }

  @HostListener('panmove', ['$event']) protected onPanMove(event) {
    event.preventDefault();
    this.isDragging = true;
    this.updateDeltaPosition(event);
  }
  @HostListener('panend', ['$event']) protected onPanEnd(event) {
    if(event.deltaX < -this.throwThreshhold)
      return this.initThrowLeft();
    else if(event.deltaX > this.throwThreshhold)
      return this.initThrowRight();

    this.transition = 'transform 300ms ease-in';
    setTimeout(()=>{
      this.transition = '';
    }, 300);
    this.isDragging = false;
    this.updateDeltaPosition(event);
    
    event.preventDefault();
  }
  @HostListener('pancancel', ['$event']) protected onPanCancel(event) {
    this.transition = 'transform 300ms ease-in';
    setTimeout(()=>{
      this.transition = '';
    }, 300);
    this.isDragging = false;
    this.updateDeltaPosition(event);
    
    event.preventDefault();
  }

}
