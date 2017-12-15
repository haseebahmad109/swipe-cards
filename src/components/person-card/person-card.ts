import { 
  Component,
  Input
} from '@angular/core';

/**
 * Generated class for the PersonCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'person-card',
  templateUrl: 'person-card.html'
})
export class PersonCardComponent {

  @Input('person') person:any;

  @Input('count')
  count:number = 0;

  prevCount:number = 0;

  @Input('total')
  total:number = 0;

  constructor(){}

  ngOnInit(){
    this.prevCount = this.count;
  }
  ngOnChanges(changes:any){
    if (!changes["count"].isFirstChange()) {
      this.count = this.prevCount;;
    }
  }

}
