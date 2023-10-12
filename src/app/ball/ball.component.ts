import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
  animations: [
    trigger('ballDrop', [
      state('up', style({ bottom: '100px' })),
      state('down', style({ bottom: '10px' })),
      transition('up => down', animate('500ms ease-in')),
      transition('down => up', animate('500ms ease-out')),
    ]),
  ],
})
export class BallComponent {

  ballState = 'up';

  toggleAnimation() {
    this.ballState = this.ballState === 'up' ? 'down' : 'up';
  }

}
