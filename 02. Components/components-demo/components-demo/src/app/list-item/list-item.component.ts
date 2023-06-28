import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnDestroy {

  @Input() user!: { firstName: string; lastName: string; }
  @Input() showLastName!: boolean;

  @Output() customEvent = new EventEmitter<ICustomEvent>();

  intervalId!: number;

  constructor() {
    console.log(this.user)
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {

    }, 5000) as unknown as number;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.customEvent.emit({ test: 123 });
  }

}


