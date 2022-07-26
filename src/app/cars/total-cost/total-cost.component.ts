import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {

  private VAT: number = 1.23;

  @Input()
  totalCost: number = 0;

  @Output()
  shownGross: EventEmitter<number> = new EventEmitter<number>();

  showGross(): void {
    this.shownGross.emit(this.totalCost * this.VAT);
  }
}
