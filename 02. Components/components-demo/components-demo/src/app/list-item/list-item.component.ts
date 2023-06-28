import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit{

  @Input() user!: { firstName: string; lastName: string; }
  @Input() showLastName!: boolean;

  @Output() customEvent = new EventEmitter<ICustomEvent>();

  constructor() {
    console.log(this.user)
  }

  ngOnInit() {
    console.log(this.user)
  }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.customEvent.emit({ test: 123 });
  }

}


