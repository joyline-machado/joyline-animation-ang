import { Component } from '@angular/core';
import { trigger, transition, state, style, animate, query, stagger, keyframes } from '@angular/animations'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity:0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
          ]))
        ]), {optional: true}),

      ])
    ])
  ]
})
export class TodosComponent {

  items!: any[];

  constructor() {
    this.items = ['Book',
      'Pen',
      'Pencil',
      'Cup'
    ]
  }



  pushItem(){
    this.items.push('item');
  }

  removeItem(){
    this.items.pop();
  }


}
